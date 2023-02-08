package com.example.backend.store;

import com.example.backend.domain.Todo;
import com.example.backend.domain.TodoEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

@DataJpaTest
class JpaTodoStoreIT {

    @Autowired
    TodoRepository todoRepository;

    @Test
    void getTodos() {
        TodoEntity todoEntity = new TodoEntity();
        todoEntity.setId(1);
        todoEntity.setContent("Hello World");
        todoRepository.save(todoEntity);
        TodoStore sut = new JpaTodoStore(todoRepository);


        List<Todo> result = sut.getTodos();


        assertThat(result.size(), equalTo(1));
        assertThat(result.get(0).getId(), equalTo("1"));
        assertThat(result.get(0).getContent(), equalTo("Hello World"));
    }
}