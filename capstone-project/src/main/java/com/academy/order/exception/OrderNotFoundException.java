package com.academy.order.exception;

import java.util.UUID;

public class OrderNotFoundException extends RuntimeException {

    public OrderNotFoundException(UUID orderId) {
        super(String.format("سفارش با شناسه %s یافت نشد.", orderId));
    }
}
