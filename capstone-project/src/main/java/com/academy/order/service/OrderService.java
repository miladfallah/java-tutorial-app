package com.academy.order.service;

import com.academy.order.domain.InventoryItem;
import com.academy.order.domain.Order;
import com.academy.order.domain.OutboxEvent;
import com.academy.order.exception.InsufficientStockException;
import com.academy.order.exception.OrderNotFoundException;
import com.academy.order.repository.InventoryRepository;
import com.academy.order.repository.OrderRepository;
import com.academy.order.repository.OutboxRepository;
import com.academy.order.web.dto.CreateOrderRequest;
import com.academy.order.web.dto.OrderItemRequest;
import com.academy.order.web.dto.OrderResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    private static final Logger log = LoggerFactory.getLogger(OrderService.class);

    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;
    private final OutboxRepository outboxRepository;

    public OrderService(
        OrderRepository orderRepository,
        InventoryRepository inventoryRepository,
        OutboxRepository outboxRepository
    ) {
        this.orderRepository = orderRepository;
        this.inventoryRepository = inventoryRepository;
        this.outboxRepository = outboxRepository;
    }

    /**
     * Creates an order with guaranteed ACID transactional safety, PostgreSQL row-level locking
     * to prevent concurrent overselling across multiple instances, and transactional outbox.
     */
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public OrderResponse createOrder(CreateOrderRequest request, String idempotencyKey) {
        // 1. Idempotency check: if key already exists, return previous result
        if (idempotencyKey != null && !idempotencyKey.isBlank()) {
            Optional<Order> existing = orderRepository.findByIdempotencyKey(idempotencyKey);
            if (existing.isPresent()) {
                log.info("Idempotent hit: Returning existing order for key '{}'", idempotencyKey);
                return OrderResponse.fromEntity(existing.get());
            }
        }

        log.debug("Initiating order creation for customer: {}", request.customerId());
        Order order = new Order(request.customerId(), idempotencyKey);

        // 2. Lock & Reserve Inventory Items (Sort by productId to prevent Deadlocks)
        var sortedItems = request.items().stream()
            .sorted((a, b) -> a.productId().compareTo(b.productId()))
            .toList();

        for (OrderItemRequest itemReq : sortedItems) {
            // Row-level lock via SELECT ... FOR UPDATE
            InventoryItem inventory = inventoryRepository.findByProductIdForUpdate(itemReq.productId())
                .orElseThrow(() -> new IllegalArgumentException("کالایی با شناسه " + itemReq.productId() + " در انبار یافت نشد."));

            if (!inventory.canReserve(itemReq.quantity())) {
                log.warn("Insufficient stock for product {}. Requested: {}, Available: {}",
                    itemReq.productId(), itemReq.quantity(), inventory.getAvailableQuantity());
                throw new InsufficientStockException(itemReq.productId(), itemReq.quantity(), inventory.getAvailableQuantity());
            }

            inventory.reserve(itemReq.quantity());
            inventoryRepository.save(inventory);

            order.addItem(inventory.getProductId(), inventory.getSku(), itemReq.quantity(), inventory.getUnitPrice());
        }

        // 3. Confirm order
        order.confirm();
        Order savedOrder = orderRepository.save(order);

        // 4. Transactional Outbox Pattern: Save event to database within the exact same transaction
        String eventPayload = String.format("{\"orderId\":\"%s\",\"totalAmount\":%s,\"customerId\":\"%s\"}",
            savedOrder.getId(), savedOrder.getTotalAmount(), savedOrder.getCustomerId());

        OutboxEvent outboxEvent = new OutboxEvent(
            "Order",
            savedOrder.getId().toString(),
            "OrderCreated",
            eventPayload
        );
        outboxRepository.save(outboxEvent);

        log.info("Order created successfully with ID: {}, Total: {}", savedOrder.getId(), savedOrder.getTotalAmount());
        return OrderResponse.fromEntity(savedOrder);
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrderById(UUID orderId) {
        Order order = orderRepository.findWithItemsById(orderId)
            .orElseThrow(() -> new OrderNotFoundException(orderId));
        return OrderResponse.fromEntity(order);
    }
}
