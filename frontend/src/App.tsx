import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [todoList, setTodoList] = useState<string[]>([])
    const [todo, setTodo] = useState<string>('')

    const getTodos = async () => {
        const response = await axios.get('/todo')
        const data = response.data
        const result = data.map((todoFromServer: any) => todoFromServer.content)
        setTodoList(result)
    }

    const createTodo = async () => {
        await axios.post('/todo', {content: todo})
        await getTodos()
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const addTodo = () => {
        if (todo === '') {
            return
        }
        setTodo('')
        createTodo()
    }

    useEffect(() => {
        getTodos()
    }, [])

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
