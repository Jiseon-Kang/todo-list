import React, {ChangeEvent, useEffect, useState} from 'react';
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

    useEffect(() => {
        // axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        //     .then((response) => {
        //         const data = response.data
        //         const pokemons = data.results
        //         const result = pokemons.map((pokemon: any) => pokemon.name)
        //         setTodoList([...todoList, ...result])
        //     })
        // axios.get('/todos')
        //     .then((response) => {
        //         const data = response.data
        //         setTodoList([...todoList, ...data])
        //     })
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
