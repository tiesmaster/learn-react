export interface TodoItem {
    text: string;
    completed: boolean;
}

export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export default interface State {
    visibilityFilter: VisibilityFilter;
    todos: TodoItem[];
}