import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from "../features/todo/todoSlice.js";

function TodoForm(props) {
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

export default TodoForm;