package com.guarnera.fib.finder;

import com.guarnera.fib.finder.services.FibService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FibServiceTests {

    FibService fibService = new FibService();

    @Test
    public void confirm_0_returns_1() {
        long result = fibService.findNextFibNum(0);
        assertEquals(result, 1);
    }

    @Test
    public void confirm_negative_returns_0() {
        long result = fibService.findNextFibNum(-1);
        assertEquals(0, result);
    }

    @Test
    public void confirm_7_returns_8() {
        long result = fibService.findNextFibNum(7);
        assertEquals( 8, result);
    }

    @Test
    public void confirm_4180_returns_4181() {
        long result = fibService.findNextFibNum(4180);
        assertEquals(4181, result);
    }
}
