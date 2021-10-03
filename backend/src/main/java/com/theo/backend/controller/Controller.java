package com.theo.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Controller {
    @GetMapping("/")
    public String index() {
        return "Welcome to Theo!";
    }

    @PostMapping("/import-data")
    public String importData() {
        return "Thanks for importing data!";
    }
}