import { TodoItem, VisibilityFilter } from './types';

export default interface State {
    visibilityFilter: VisibilityFilter;
    todos: TodoItem[];
}