package com.example.backend.controller;

import com.example.backend.domain.Todo;
import com.example.backend.service.TodoService;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TodoControllerTest {

    @Test
    void getTodos() throws Exception {

        Todo todo = new Todo();
        todo.setId("0001");
        todo.setContent("Hello World");
        TodoService todoService = mock(TodoService.class);
        when(todoService.getTodos()).thenReturn(
                Collections.singletonList(todo)
        );
        MockMvc sut = MockMvcBuilders.standaloneSetup(new TodoController(todoService)).build();


        sut.perform(MockMvcRequestBuilders.get("/todo"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value("0001"))
                .andExpect(jsonPath("$[0].content").value("Hello World"));
    }
}