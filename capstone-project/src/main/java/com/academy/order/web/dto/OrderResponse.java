package com.academy.order.web.dto;

import com.academy.order.domain.Order;
import com.academy.order.domain.OrderStatus;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record OrderResponse(
    UUID id,
    UUID customerId,
    OrderStatus status,
    BigDecimal totalAmount,
    String idempotencyKey,
    List<OrderItemResponse> items,
    Instant createdAt
) {
    public static OrderResponse fromEntity(Order order) {
        List<OrderItemResponse> itemDtos = order.getItems().stream()
            .map(OrderItemResponse::fromEntity)
            .toList();

        return new OrderResponse(
            order.getId(),
            order.getCustomerId(),
            order.getStatus(),
            order.getTotalAmount(),
            order.getIdempotencyKey(),
            itemDtos,
            order.getCreatedAt()
        );
    }
}
