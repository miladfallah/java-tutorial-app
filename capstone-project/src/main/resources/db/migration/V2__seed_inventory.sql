-- ============================================================
-- V2__seed_inventory.sql
-- Initial seed data for test & development environments
-- ============================================================

INSERT INTO inventory_items (id, product_id, sku, product_name, available_quantity, reserved_quantity, unit_price, version, created_at, updated_at)
VALUES 
    ('a0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'SKU-LAPTOP-PRO', 'MacBook Pro M3 Max 36GB', 10, 0, 2499.00, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('a0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', 'SKU-KEYBOARD-MECH', 'Mechanical Wireless Keyboard 75%', 50, 0, 149.50, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('a0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000003', 'SKU-MONITOR-4K', 'UltraFine 27" 4K Display', 25, 0, 699.00, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (product_id) DO NOTHING;
