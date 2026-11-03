package com.academy.order.domain;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "inventory_items")
public class InventoryItem {

    @Id
    private UUID id;

    @Column(name = "product_id", nullable = false, unique = true)
    private UUID productId;

    @Column(name = "sku", nullable = false, unique = true, length = 64)
    private String sku;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "available_quantity", nullable = false)
    private int availableQuantity;

    @Column(name = "reserved_quantity", nullable = false)
    private int reservedQuantity;

    @Column(name = "unit_price", nullable = false, precision = 12, scale = 2)
    private BigDecimal unitPrice;

    @Version
    @Column(name = "version", nullable = false)
    private Long version;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    protected InventoryItem() {
        // JPA required default constructor
    }

    public InventoryItem(UUID productId, String sku, String productName, int availableQuantity, BigDecimal unitPrice) {
        this.id = UUID.randomUUID();
        this.productId = productId;
        this.sku = sku;
        this.productName = productName;
        this.availableQuantity = availableQuantity;
        this.reservedQuantity = 0;
        this.unitPrice = unitPrice;
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
    }

    public boolean canReserve(int amount) {
        return amount > 0 && this.availableQuantity >= amount;
    }

    public void reserve(int amount) {
        if (!canReserve(amount)) {
            throw new IllegalStateException(
                String.format("موجودی ناکافی برای کالا %s: موجودی فعلی=%d، درخواستی=%d", sku, availableQuantity, amount)
            );
        }
        this.availableQuantity -= amount;
        this.reservedQuantity += amount;
        this.updatedAt = Instant.now();
    }

    // Getters
    public UUID getId() { return id; }
    public UUID getProductId() { return productId; }
    public String getSku() { return sku; }
    public String getProductName() { return productName; }
    public int getAvailableQuantity() { return availableQuantity; }
    public int getReservedQuantity() { return reservedQuantity; }
    public BigDecimal getUnitPrice() { return unitPrice; }
    public Long getVersion() { return version; }
    public Instant getCreatedAt() { return createdAt; }
    public Instant getUpdatedAt() { return updatedAt; }
}
