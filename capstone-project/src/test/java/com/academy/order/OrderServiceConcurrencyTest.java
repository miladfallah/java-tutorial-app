package com.academy.order;

import com.academy.order.domain.InventoryItem;
import com.academy.order.exception.InsufficientStockException;
import com.academy.order.repository.InventoryRepository;
import com.academy.order.repository.OrderRepository;
import com.academy.order.service.OrderService;
import com.academy.order.web.dto.CreateOrderRequest;
import com.academy.order.web.dto.OrderItemRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class OrderServiceConcurrencyTest {

    @Autowired
    private OrderService orderService;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private OrderRepository orderRepository;

    private UUID productId;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
        inventoryRepository.deleteAll();

        productId = UUID.randomUUID();
        // Initial inventory has exactly 10 units in stock
        InventoryItem item = new InventoryItem(
            productId,
            "SKU-CONCURRENCY-TEST",
            "High Performance Test Laptop",
            10,
            BigDecimal.valueOf(1000.00)
        );
        inventoryRepository.save(item);
    }

    @Test
    @DisplayName("آزمون همزمانی: ۲۰ درخواست همزمان برای کالایی با ۱۰ موجودی باید دقیقاً به ۱۰ موفقیت و ۱۰ شکست منجر شود")
    void testConcurrentOrderPlacementNoOverselling() throws InterruptedException {
        int numberOfThreads = 20;
        ExecutorService executorService = Executors.newFixedThreadPool(numberOfThreads);
        CountDownLatch latch = new CountDownLatch(numberOfThreads);

        AtomicInteger successfulOrders = new AtomicInteger(0);
        AtomicInteger failedOrders = new AtomicInteger(0);

        for (int i = 0; i < numberOfThreads; i++) {
            final int index = i;
            executorService.submit(() -> {
                try {
                    CreateOrderRequest request = new CreateOrderRequest(
                        UUID.randomUUID(),
                        List.of(new OrderItemRequest(productId, 1))
                    );
                    String idempotencyKey = "concurrent-key-" + index;
                    orderService.createOrder(request, idempotencyKey);
                    successfulOrders.incrementAndGet();
                } catch (InsufficientStockException ex) {
                    failedOrders.incrementAndGet();
                } catch (Exception ex) {
                    System.err.println("Unexpected exception in thread: " + ex.getMessage());
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
        executorService.shutdown();

        // 1. Verify exactly 10 orders succeeded
        assertEquals(10, successfulOrders.get(), "دقیقاً ۱۰ سفارش باید با موفقیت ثبت شوند");

        // 2. Verify exactly 10 orders failed due to out of stock
        assertEquals(10, failedOrders.get(), "دقیقاً ۱۰ سفارش باید به دلیل اتمام موجودی رد شوند");

        // 3. Verify final inventory in database is strictly 0 and never negative
        InventoryItem updatedInventory = inventoryRepository.findByProductId(productId).orElseThrow();
        assertEquals(0, updatedInventory.getAvailableQuantity(), "موجودی باقیمانده انبار باید دقیقاً ۰ باشد");
        assertEquals(10, updatedInventory.getReservedQuantity(), "تعداد رزرو شده باید دقیقاً ۱۰ باشد");
    }
}
