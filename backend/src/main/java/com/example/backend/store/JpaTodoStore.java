package com.example.backend.store;

import com.example.backend.domain.Todo;
import com.example.backend.domain.TodoEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class JpaTodoStore implements TodoStore {


    private final TodoRepository todoRepository;

    public JpaTodoStore(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public List<Todo> getTodos() {
        List<Todo> result = new ArrayList<>();
        List<TodoEntity> entities = todoRepository.findAll();
        for (TodoEntity entity : entities) {
            Todo todo = new Todo();
            todo.setId(entity.getId() + "");
            todo.setContent(entity.getContent());
            result.add(todo);
        }
        return result;
    }
}
