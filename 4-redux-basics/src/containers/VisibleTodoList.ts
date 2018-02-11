import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import State, { TodoItem } from '../State';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos: TodoItem[], filter: string) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            break;
    }
    throw 'Invalid filter specified';
};

const mapStateToProps = (state: State) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        }
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;