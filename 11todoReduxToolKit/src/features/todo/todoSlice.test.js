import todoReducer, { addTodo, removeTodo, setTodos, toggleTodo, updateTodo } from './todoSlice';

describe('todoSlice', () => {
  const initialState = {
    todos: [
      { id: '1', text: 'Learn Redux', completed: false }
    ]
  };

  it('should return the initial state', () => {
    expect(todoReducer(undefined, { type: undefined }).todos.length).toBeGreaterThan(0);
  });

  it('should add a todo', () => {
    const action = addTodo('New Task');
    const state = todoReducer(initialState, action);
    expect(state.todos.length).toBe(2);
    expect(state.todos[1].text).toBe('New Task');
    expect(state.todos[1].completed).toBe(false);
  });

  it('should remove a todo', () => {
    const stateWithTwo = {
      todos: [
        { id: '1', text: 'Learn Redux', completed: false },
        { id: '2', text: 'Second', completed: false }
      ]
    };
    const action = removeTodo('2');
    const state = todoReducer(stateWithTwo, action);
    expect(state.todos.length).toBe(1);
    expect(state.todos[0].id).toBe('1');
  });

  it('should update a todo', () => {
    const action = updateTodo({ id: '1', text: 'Redux Updated' });
    const state = todoReducer(initialState, action);
    expect(state.todos[0].text).toBe('Redux Updated');
  });

  it('should toggle a todo', () => {
    const action = toggleTodo('1');
    const state = todoReducer(initialState, action);
    expect(state.todos[0].completed).toBe(true);
  });

  it('should set todos', () => {
    const newTodos = [
      { id: 'a', text: 'A', completed: false },
      { id: 'b', text: 'B', completed: true }
    ];
    const action = setTodos(newTodos);
    const state = todoReducer(initialState, action);
    expect(state.todos).toEqual(newTodos);
  });
});
