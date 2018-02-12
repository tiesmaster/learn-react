import { combineReducers } from 'redux';

import { TodoItem, VisibilityFilter } from './State';
import { TypeKeys, AddTodoAction, ToggleTodoAction, SetVisibilityFilterAction } from './actions';

function visibilityFilter(state: VisibilityFilter = 'SHOW_ALL', action: SetVisibilityFilterAction): VisibilityFilter {
    switch (action.type) {
        case TypeKeys.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state: TodoItem[] = [], action: AddTodoAction | ToggleTodoAction): TodoItem[] {
    switch (action.type) {
        case TypeKeys.ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case TypeKeys.TOGGLE_TODO:
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