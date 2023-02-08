import React, {ChangeEvent, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [todoList, setTodoList] = useState<string[]>(['Hello', "World"])
    const [todo, setTodo] = useState<string>('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const addTodo = () => {
        // const result = []
        // for(let index = 0 ; index < todoList.length; index++) {
        //     result.push(todoList[index])
        // }
        // result.push(todo)
        // setTodoList(result)
        setTodoList([...todoList, todo])
        setTodo('')
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTodo()
        }
    }

    return (
        <div className="App">
            <input type="text"
                   onKeyDown={keyDownHandler}
                   onChange={changeHandler} value={todo}/>
            <button onClick={addTodo}>
                ADD
            </button>
            {todoList.map((todo, index) => <div key={index}>{todo}</div>)}
        </div>
    );
}

export default App;
