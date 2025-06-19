import {useEffect, useState} from 'react'
import {TodoContextProvider} from './contexts'
import {TodoForm, TodoItem} from "./components/index.js";

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todoMessage) => {
        let todoObj = {
            id: Date.now(),
            todoMessage: todoMessage,
            isComplete: false
        }
        setTodos((prev) => [todoObj, ...prev])

    }

    const updateTodo = (id, todoMessage) => {
        setTodos((prev) =>
            prev.map((todoItem) =>
                todoItem.id === id ? {...todoItem, todoMessage: todoMessage} : todoItem
            )
        )
    }


    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todoItem) => todoItem.id !== id))
    }


    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((todoItem) =>
                todoItem.id === id ? {...todoItem, isComplete: !todoItem.isComplete} : todoItem
            )
        )
    }


    useEffect(() => {
        const todosList = JSON.parse(localStorage.getItem("todosList"))

        if (todosList && todosList.length > 0) {
            setTodos(todosList)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todosList", JSON.stringify(todos))
    }, [todos]);

    return (
        <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo} />
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default App
