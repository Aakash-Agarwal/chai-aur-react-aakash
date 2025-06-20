import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoForm from './TodoForm';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('TodoForm', () => {
  it('renders input and button', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/write todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('dispatches addTodo on submit', () => {
    const store = mockStore({});
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
    fireEvent.change(screen.getByPlaceholderText(/write todo/i), { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Todo/i }));
    expect(store.dispatch).toHaveBeenCalled();
  });
});
