import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

/** JDK 25 virtual threads with bounded downstream concurrency. */
public class AsyncLab {
    public static void main(String[] args) throws Exception {
        Semaphore capacity = new Semaphore(3);
        AtomicInteger active = new AtomicInteger();
        AtomicInteger peak = new AtomicInteger();
        List<Future<Integer>> results = new ArrayList<>();
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 0; i < 30; i++) {
                results.add(executor.submit(() -> {
                    capacity.acquire();
                    try {
                        int concurrent = active.incrementAndGet();
                        peak.accumulateAndGet(concurrent, Math::max);
                        Thread.sleep(10); // Simulates waiting for a limited external resource.
                        return 1;
                    } finally {
                        active.decrementAndGet();
                        capacity.release();
                    }
                }));
            }
            int total = 0;
            for (var result : results) total += result.get(5, TimeUnit.SECONDS);
            if (total != 30 || peak.get() > 3 || active.get() != 0) throw new AssertionError("Capacity limit failed");
        }
        System.out.println("AsyncLab: 30 tasks completed; peak downstream concurrency=" + peak.get());
        System.out.println("This is a correctness exercise, not a throughput benchmark.");
    }
}
