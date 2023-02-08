package com.example.backend.domain;

// jackson library
public class Todo {
    private String id;
    private String content;

    public void setId(String id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
