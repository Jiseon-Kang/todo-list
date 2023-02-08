package com.example.backend.service;

import com.example.backend.domain.Todo;
import com.example.backend.store.TodoStore;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class DefaultTodoServiceTest {

    @Test
    void getTodos() {
        Todo todo = new Todo();
        todo.setId("0001");
        todo.setContent("Hello World");
        TodoStore todoStore = mock(TodoStore.class);
        when(todoStore.getTodos()).thenReturn(
                Collections.singletonList(todo)
        );
        TodoService sut = new DefaultTodoService(todoStore);


        List<Todo> result = sut.getTodos();


        assertThat(result.size(), equalTo(1));
        assertThat(result.get(0).getId(), equalTo("0001"));
        assertThat(result.get(0).getContent(), equalTo("Hello World"));
    }
}