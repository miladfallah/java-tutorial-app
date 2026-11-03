package com.academy.order;

import com.academy.order.config.SecurityConfig;
import com.academy.order.service.OrderService;
import com.academy.order.web.GlobalExceptionHandler;
import com.academy.order.web.OrderController;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = {OrderController.class, GlobalExceptionHandler.class})
@Import(SecurityConfig.class)
public class OrderControllerValidationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrderService orderService;

    @Test
    @DisplayName("اعتبارسنجی ورودی: ارسال بادی خالی باید منجر به پاسخ استاندارد RFC 9457 با وضعیت 400 شود")
    void testInvalidCreateOrderReturnsProblemDetails() throws Exception {
        String invalidPayload = """
            {
                "customerId": null,
                "items": []
            }
            """;

        mockMvc.perform(post("/api/v1/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidPayload))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.title").value("خطای اعتبارسنجی ورودی"))
            .andExpect(jsonPath("$.type").value("https://academy.order/errors/validation-failed"))
            .andExpect(jsonPath("$.invalidFields.customerId").exists())
            .andExpect(jsonPath("$.invalidFields.items").exists());
    }
}
