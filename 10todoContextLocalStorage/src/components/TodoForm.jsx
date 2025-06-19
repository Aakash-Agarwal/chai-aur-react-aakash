import {useState} from "react";
import {useTodo} from "../contexts/index.js";

export default function TodoForm() {
    const [todoMessage, setTodoMessage] = useState("")
    const {addTodo} = useTodo()

    const addTodoItem = (e) => {
        e.preventDefault();
        if (!todoMessage) return
        addTodo(todoMessage)
        setTodoMessage("")
    }
    return (
        <form className="flex" onSubmit={addTodoItem}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
