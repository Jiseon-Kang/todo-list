package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

// restful api
// @CrossOrigin("*")
@RestController // annotation
public class TodoController {

    @GetMapping("/todos")
    public List<String> getTodos() {
        return Arrays.asList("Hello", "World");
    }
}
