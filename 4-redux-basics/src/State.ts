export interface TodoItem {
    text: string;
    completed: boolean;
}

export default interface State {
    visibilityFilter: string;
    todos: TodoItem[];
}