import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import State from '../state';
import { fetchPosts, selectSubreddit } from '../actions';

const SubredditInputComponent = ({ dispatch }: { dispatch: Dispatch<State> }) => {
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
                    const selectedSubreddit = input.value;
                    dispatch(fetchPosts(selectedSubreddit));
                    dispatch(selectSubreddit(selectedSubreddit));
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

const SubredditInput = connect()(SubredditInputComponent);

export default SubredditInput;