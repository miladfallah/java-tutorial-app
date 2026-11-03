package com.academy.order.web.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

public record OrderItemRequest(
    @NotNull(message = "شناسه کالا (productId) الزامی است")
    UUID productId,

    @Min(value = 1, message = "تعداد درخواستی باید حداقل ۱ عدد باشد")
    int quantity
) {}
