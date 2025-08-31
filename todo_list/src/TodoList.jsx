import { useState } from "react";
const TodoList = ()=>{
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const handleClick =()=>{
        if(inputValue.trim() !== ""){
        const newTodo ={
            id : crypto.randomUUID(),
            text: inputValue,
            completed : false,
        }
        setTodos([...todos, newTodo]);
        setInputValue("")
    }
    }
    return(
        <>
            <h1>Todo List</h1>
            <input type="text" placeholder="enter your todo list" onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={handleClick}>Add</button>
            <ul>
                {
                    todos.map(todo =>(
                        <li>{todo.text}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default TodoList;