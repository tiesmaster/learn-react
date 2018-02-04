import { State, TodoItem } from './State';
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, TOGGLE_TODO } from './actions';

const initialState: State = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

interface Action {
    type: string;
    filter: string;
    text: string;
    index: number;
}

const { SHOW_ALL } = VisibilityFilters;

export function visibilityFilter(state: string = SHOW_ALL, action: Action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state: TodoItem[] = [], action: Action) {
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

export function todoApp(state: State = initialState, action: Action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return { ...state, visibilityFilter: action.filter };
        case ADD_TODO:
            return {
                ...state,
                todos: todos(state.todos, action)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: todos(state.todos, action)
            };
        default:
            return state;
    }
}