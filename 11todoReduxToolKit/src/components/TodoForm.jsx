import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from "../features/todo/todoSlice.js";

function TodoForm() {
    const [todoMessage, setTodoMessage] = useState("")
    const dispatch = useDispatch()
    const addTodoItem = (e) => {
        e.preventDefault()
        if (!todoMessage) return
        dispatch(addTodo(todoMessage))
        setTodoMessage("")
    }

    return (
        <form className="flex" onSubmit={addTodoItem}>
            <label htmlFor="todo-input" className="sr-only">Add Todo</label>
            <input
                type="text"
                id="todo-input"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
            />
            <button aria-label='Add Todo' type="submit"
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;