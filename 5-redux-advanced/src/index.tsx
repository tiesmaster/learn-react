// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import App from './App';
// import * as Reducer from './reducer';

// let store = createStore(Reducer.todoApp);

// ReactDOM.render(
//     (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     ),
//     document.getElementById('root')
// );

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './actions';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.dispatch(selectSubreddit('reactjs'));
store
    .dispatch(fetchPosts('reactjs'))
    // tslint:disable-next-line:no-console
    .then(() => console.log(store.getState()));