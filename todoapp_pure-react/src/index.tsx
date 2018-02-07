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

interface TodoInputProps {
  addTodoItem: (newTodoItem: TodoItem) => void;
}

class TodoInput extends React.Component<TodoInputProps, { userInput: string }> {
  constructor(props: { addTodoItem: (newTodoItem: TodoItem) => void }) {
    super(props);
    this.state = { userInput: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
  }
  handleFormSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.userInput !== '') {
      this.props.addTodoItem({ taskTitle: this.state.userInput, isCompleted: false });
      this.setState({ userInput: '' });
    }
  }
  handleUserInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ userInput: e.currentTarget.value });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.handleUserInputChange} value={this.state.userInput} />
        <button>Add TODO item</button>
      </form>
    );
  }
}

class TodoApp extends React.Component<{ initialTodos: TodoItem[] }, { todos: Immutable.List<TodoItem> }> {
  constructor(props: { initialTodos: TodoItem[] }) {
    super(props);
    this.state = { todos: Immutable.List(props.initialTodos) };
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }
  handleAddTodoItem(newTodoItem: TodoItem) {
    this.setState({ todos: this.state.todos.push(newTodoItem) });
  }
  handleToggleTodo(todoIndex: number) {
    const todos = this.state.todos;
    const todo = todos.get(todoIndex);

    this.setState({ todos: todos.set(todoIndex, { ...todo, isCompleted: !todo.isCompleted }) });
  }
  render() {
    return (
      <div>
        <TodoInput addTodoItem={this.handleAddTodoItem} />
        <TodoList todos={this.state.todos.toArray()} toggleTodoItem={this.handleToggleTodo} />
      </div>
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