package com.academy.order.repository;

import com.academy.order.domain.Order;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface OrderRepository extends JpaRepository<Order, UUID> {

    Optional<Order> findByIdempotencyKey(String idempotencyKey);

    /**
     * Solves the N+1 problem by eagerly fetching order items in a single SQL query.
     */
    @EntityGraph(attributePaths = {"items"})
    Optional<Order> findWithItemsById(UUID id);
}
