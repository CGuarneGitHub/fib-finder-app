package com.guarnera.fib.finder.controllers;

import com.guarnera.fib.finder.models.SearchRequest;
import com.guarnera.fib.finder.models.SearchResponse;
import com.guarnera.fib.finder.services.FibService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class FibController {

    @Autowired
    FibService fibService;

    @PostMapping("/findFib")
    public SearchResponse findNextFib(@RequestBody SearchRequest request) {

        int nextNum = fibService.findNextFibNum(request.getStartingNumber());

        SearchResponse response = new SearchResponse();
        response.setNextFibNum(nextNum);

        return response;
    }
}
