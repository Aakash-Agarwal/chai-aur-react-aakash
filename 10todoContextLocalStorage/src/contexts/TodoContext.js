import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todoMessage) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}