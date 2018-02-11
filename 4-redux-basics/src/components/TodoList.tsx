import * as React from 'react';
import Todo from './Todo';

type TodoListProps = {
    todos: { text: string, completed: boolean }[];
    onTodoClick: (index: number) => void;
};

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
);

export default TodoList;