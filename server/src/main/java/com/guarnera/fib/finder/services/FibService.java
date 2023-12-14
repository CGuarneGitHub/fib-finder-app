package com.guarnera.fib.finder.services;

import org.springframework.stereotype.Service;

@Service
public class FibService {

    public int findNextFibNum(int startingNum) {

        if(startingNum < 0) {
            return 0;
        } else if (startingNum == 0 || startingNum == 1) {
            return 1;
        }

        int firstFib = 1;
        int secondFib = 1;
        int currentFib = firstFib + secondFib;

        while(currentFib <= startingNum) {

            firstFib = secondFib;
            secondFib = currentFib;
            currentFib = firstFib + secondFib;
        }

        return currentFib;

    }

}
