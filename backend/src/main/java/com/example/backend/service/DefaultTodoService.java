package com.example.backend.service;

import com.example.backend.domain.Todo;
import com.example.backend.store.TodoStore;
import org.springframework.stereotype.Service;

import java.util.List;

// 기능에 대한 명세서
@Service
public class DefaultTodoService implements TodoService {

    private final TodoStore todoStore;

    public DefaultTodoService(TodoStore todoStore) {
        this.todoStore = todoStore;
    }

    @Override
    public List<Todo> getTodos() {
        return todoStore.getTodos();
    }

    @Override
    public void createTodo(Todo todo) {
       todoStore.createTodo(todo);
    }
}
