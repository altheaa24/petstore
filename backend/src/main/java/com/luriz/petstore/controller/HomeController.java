package com.luriz.petstore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Petstore API is running. Please visit http://localhost:5173 to view the store.";
    }
}
