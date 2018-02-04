import { Action, combineReducers } from 'redux';

import { TodoItem } from './State';
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, TOGGLE_TODO } from './actions';

const { SHOW_ALL } = VisibilityFilters;

type VisibilityFilterAction = Action & { filter: string };

function visibilityFilter(state: string = SHOW_ALL, action: VisibilityFilterAction) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
type TodoAction = Action & { text: string, index: number };

function todos(state: TodoItem[] = [], action: TodoAction) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                index === action.index
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
}

export const todoApp = combineReducers({
    visibilityFilter,
    todos
});