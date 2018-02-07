import * as React from 'react';
import * as ReactDOM from 'react-dom';
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

class TodoApp extends React.Component<{ initialTodos: TodoItem[] }, { todos: TodoItem[] }> {
  constructor(props: { initialTodos: TodoItem[] }) {
    super(props);
    this.state = { todos: props.initialTodos };
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }
  handleToggleTodo(todoIndex: number) {
    this.setState({
      todos: this.state.todos.map((todo, index) =>
        index === todoIndex ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    });
  }
  render() {
    return (
      <TodoList todos={this.state.todos} toggleTodoItem={this.handleToggleTodo} />
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