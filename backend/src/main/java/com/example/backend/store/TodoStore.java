package com.example.backend.store;

import com.example.backend.domain.Todo;

import java.util.List;

public interface TodoStore {
    List<Todo> getTodos();

    void createTodo(Todo todo);
}
