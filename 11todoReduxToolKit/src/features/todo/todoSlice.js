import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: nanoid(),
        text: 'Learn Redux',
        completed: false,
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            )
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
        }
    }
})

export const {setTodos, addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;