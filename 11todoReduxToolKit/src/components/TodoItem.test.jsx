import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoItem from './TodoItem';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('TodoItem', () => {
    const todo = {id: '1', text: 'Test Todo', completed: false};

    it('renders todo text', () => {
        const store = mockStore({});
        render(
            <Provider store={store}>
                <TodoItem todo={todo}/>
            </Provider>
        );
        expect(screen.getByDisplayValue('Test Todo')).toBeInTheDocument();
    });

    it('calls dispatch on toggle', () => {
        const store = mockStore({});
        store.dispatch = jest.fn();
        render(
            <Provider store={store}>
                <TodoItem todo={todo}/>
            </Provider>
        );
        fireEvent.click(screen.getByRole('checkbox'));
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('calls dispatch on delete', () => {
        const store = mockStore({});
        store.dispatch = jest.fn();
        render(
            <Provider store={store}>
                <TodoItem todo={todo}/>
            </Provider>
        );
        fireEvent.click(screen.getByRole('button', {name: /Delete Todo/i})); // The delete button has no aria-label
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('disables editing for completed todos', () => {
        const store = mockStore({});
        const completedTodo = {...todo, completed: true};
        render(
            <Provider store={store}>
                <TodoItem todo={completedTodo}/>
            </Provider>
        );
        expect(screen.getByRole('button', {name: /Edit Todo/i})).toBeDisabled();
    });
});
