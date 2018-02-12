import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import State from '../state';
import { addTodo } from '../actions';

const AddTodoComponent = ({ dispatch }: { dispatch: Dispatch<State> }) => {
    let input: HTMLInputElement | null;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (input === null) {
                        return;
                    }
                    if (input !== null && !input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

const AddTodo = connect()(AddTodoComponent);

export default AddTodo;