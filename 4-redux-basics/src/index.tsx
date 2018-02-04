import { createStore } from 'redux';

import { VisibilityFilters } from './actions';

interface TodoItem {
}

interface State {
  visibilityFilter: string;
  todos: TodoItem[];
}

const initialState: State = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state: State = initialState, action: null) {
  return state;
}

function counter(state: number = 0, action: { type: string; }) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() =>
  // tslint:disable-next-line:no-console
  console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
