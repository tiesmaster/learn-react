import { createStore } from 'redux';

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
