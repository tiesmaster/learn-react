export interface TodoItem {
    text: string;
    completed: boolean;
}

export interface State {
    visibilityFilter: string;
    todos: TodoItem[];
}