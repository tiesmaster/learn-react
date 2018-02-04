// TOGGLE_TODO
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

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

export function todoApp(state: State = initialState, action: Action) {
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