export interface TodoItem {
    text: string;
}

export interface State {
    visibilityFilter: string;
    todos: TodoItem[];
}