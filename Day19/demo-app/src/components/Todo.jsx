import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const addTodo = () => { 
        if (inputValue.trim()) {
            setTodos([...todos, setInputValue]);
            setInputValue("");
        }
    }
    
    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index); 
        setTodos (updatedTodos);
    };

    return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onclick={addTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo (index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default Todo;