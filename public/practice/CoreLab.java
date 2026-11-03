import java.math.BigDecimal;
import java.time.*;
import java.util.*;

/** Run with JDK 25: java CoreLab.java. No dependency downloads required. */
public class CoreLab {
    record Basket(List<String> skus) {
        Basket { skus = List.copyOf(skus); }
    }
    static <T> void copy(List<? extends T> source, List<? super T> target) {
        for (T item : source) target.add(item);
    }
    static void check(boolean condition, String message) {
        if (!condition) throw new AssertionError(message);
    }
    public static void main(String[] args) {
        List<Integer> source = List.of(1, 2);
        List<Number> target = new ArrayList<>();
        copy(source, target);
        check(target.equals(List.of(1, 2)), "PECS copy");

        var mutable = new ArrayList<>(List.of("book"));
        var basket = new Basket(mutable);
        mutable.add("pen");
        check(basket.skus().size() == 1, "defensive copy");
        try {
            basket.skus().add("not allowed");
            throw new AssertionError("basket must be immutable");
        } catch (UnsupportedOperationException expected) { /* expected */ }

        var a = new BigDecimal("1.0");
        var b = new BigDecimal("1.00");
        check(!a.equals(b), "scale-sensitive equality");
        check(a.compareTo(b) == 0, "numeric equality");

        Clock clock = Clock.fixed(Instant.parse("2026-01-01T00:00:00Z"), ZoneOffset.UTC);
        Instant expires = clock.instant().plus(Duration.ofMinutes(15));
        check(!clock.instant().isAfter(expires), "fixed clock test");
        System.out.println("CoreLab: 6 checks passed. Try removing List.copyOf and rerun.");
    }
}
