package com.example.backend.service;

import com.example.backend.domain.Todo;

import java.util.List;

// 기능에 대한 명세서
public interface TodoService {
    List<Todo> getTodos();
}
