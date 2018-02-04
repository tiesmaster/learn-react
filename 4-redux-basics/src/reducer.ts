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
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    } else {
                        return todo;
                    }
                })
            });
        default:
            return state;
    }
}