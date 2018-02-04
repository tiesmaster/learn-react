import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import { App } from './App';
import * as Reducer from './reducer';

let store = createStore(Reducer.todoApp);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.dispatch(addTodo('Cleanup index.tsx'));
store.dispatch(addTodo('Fix duplicate definition of state, and todo item'));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
store.dispatch(toggleTodo(0));