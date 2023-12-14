package com.guarnera.fib.finder.services;

import com.guarnera.fib.finder.models.SearchResponse;
import org.springframework.stereotype.Service;

@Service
public class FibService {

    public long findNextFibNum(long startingNum) {

        if(startingNum < 0) {
            return 0;
        } else if (startingNum == 0 || startingNum == 1) {
            return 1;
        }

        long firstFib = 1;
        long secondFib = 1;
        long currentFib = firstFib + secondFib;

        while(currentFib <= startingNum) {

            firstFib = secondFib;
            secondFib = currentFib;
            currentFib = firstFib + secondFib;
        }

        return currentFib;

    }

}
