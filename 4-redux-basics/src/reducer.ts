import { State } from './State';
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

export function todoApp(state: State = initialState, action: Action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return { ...state, visibilityFilter: action.filter };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    text: action.text,
                    completed: false
                }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.index
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        default:
            return state;
    }
}
