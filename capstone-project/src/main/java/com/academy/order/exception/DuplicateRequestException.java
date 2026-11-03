package com.academy.order.exception;

public class DuplicateRequestException extends RuntimeException {

    public DuplicateRequestException(String idempotencyKey) {
        super(String.format("درخواست با کلید یکتایی (Idempotency-Key) '%s' قبلاً پردازش شده است.", idempotencyKey));
    }
}
