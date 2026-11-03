import java.util.*;
import java.util.concurrent.*;

/** A single-JVM lab, NOT a distributed stock reservation solution. */
public class InventoryLab {
    static final class Inventory {
        private int stock;
        Inventory(int stock) { this.stock = stock; }
        synchronized boolean reserve(int quantity) {
            if (quantity < 1 || stock < quantity) return false;
            stock -= quantity;
            return true;
        }
        synchronized int remaining() { return stock; }
    }
    public static void main(String[] args) throws Exception {
        Inventory inventory = new Inventory(10);
        CountDownLatch start = new CountDownLatch(1);
        List<Future<Boolean>> results = new ArrayList<>();
        try (var executor = Executors.newFixedThreadPool(20)) {
            for (int i = 0; i < 20; i++) {
                results.add(executor.submit(() -> { start.await(); return inventory.reserve(1); }));
            }
            start.countDown();
            int successful = 0;
            for (var result : results) if (result.get(5, TimeUnit.SECONDS)) successful++;
            if (successful != 10 || inventory.remaining() != 0) {
                throw new AssertionError("Expected 10 successes and zero stock; got " + successful);
            }
        }
        System.out.println("InventoryLab: 20 competing tasks, 10 successful reservations, zero stock.");
        System.out.println("Next: explain why synchronized cannot protect two independent JVMs.");
    }
}
