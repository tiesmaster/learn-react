import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';

// TOGGLE_TODO
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

import { App } from './App';

interface TodoItem {
  text: string;
}

interface State {
  visibilityFilter: string;
  todos: TodoItem[];
}

const initialState: State = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

interface Action {
  type: string;
  filter: string;
  text: string;
}

function todoApp(state: State = initialState, action: Action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    default:
      return state;
  }
}

let store = createStore(todoApp);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: VisibilityFilters.SHOW_ACTIVE });
store.dispatch({ type: 'ADD_TODO', text: 'Fix store.subscribe stuff' });
store.dispatch({ type: 'ADD_TODO', text: 'Just testing!!!' });