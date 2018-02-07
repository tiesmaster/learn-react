import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Immutable from 'immutable';

import './index.css';

interface TodoItem {
  taskTitle: string;
  isCompleted: boolean;
}

const TodoElement = (props: { todo: TodoItem, toggleTodo: () => void }) =>
  (
    <li>
      <input
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange={props.toggleTodo}
      />
      <span
        style={
          {
            textDecoration: props.todo.isCompleted ? 'line-through' : 'none'
          }
        }
      >
        {props.todo.taskTitle}
      </span>
    </li>
  );

const TodoList = (props: { todos: TodoItem[], toggleTodoItem: (todoIndex: number) => void }) =>
  (
    <ul>
      {props.todos.map((todoItem, index) =>
        <TodoElement
          key={index}
          todo={todoItem}
          toggleTodo={() => props.toggleTodoItem(index)}
        />)}
    </ul>
  );

class TodoApp extends React.Component<{ initialTodos: TodoItem[] }, { todos: Immutable.List<TodoItem> }> {
  constructor(props: { initialTodos: TodoItem[] }) {
    super(props);
    this.state = { todos: Immutable.List(props.initialTodos) };
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }
  handleToggleTodo(todoIndex: number) {
    const todos = this.state.todos;
    const todo = todos.get(todoIndex);

    this.setState({ todos: todos.set(todoIndex, { ...todo, isCompleted: !todo.isCompleted }) });
  }
  render() {
    return (
      <TodoList todos={this.state.todos.toArray()} toggleTodoItem={this.handleToggleTodo} />
    );
  }
}

const sampleTodoItems = [
  {
    taskTitle: 'Finish this excercise',
    isCompleted: false
  },
  {
    taskTitle: 'Check if you need the big lambda here, and there',
    isCompleted: true
  }
];

ReactDOM.render(
  <TodoApp initialTodos={sampleTodoItems} />,
  document.getElementById('root') as HTMLElement
);