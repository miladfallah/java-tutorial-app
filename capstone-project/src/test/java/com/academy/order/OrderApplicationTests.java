package com.academy.order;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class OrderApplicationTests {

    @Test
    void contextLoads() {
        // Verifies Spring ApplicationContext boots up cleanly without dependency issues
    }
}
