package com.example.backend.controller;

import com.example.backend.domain.Todo;
import com.example.backend.service.TodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// restful api
// @CrossOrigin("*")
@RestController // annotation
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todo")
    public List<Todo> getTodos() {
        return todoService.getTodos();
    }
}
