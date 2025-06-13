import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts'
function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    todoObj = {
      id: Date.now(),
      todoMessage: todo,
      isComplete: false
    }
    setTodos((prev) => [todoObj, ...prev])

  }

  const updateTodo = (id, todo) => {
    todos = todos.map((todoItem) => (id === todoItem.id? todoItem.todoMessage = todo: todoItem));
    setTodos(todos)
  }

  const deleteTodo = (id) => {
    todos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(todos)
  }

  const toggleComplete = (id) => {
    todos = todos.map((todoItem) => (id === todoItem.id? todoItem.isComplete = !todoItem.isComplete: todoItem));
    setTodos(todos)
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
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
