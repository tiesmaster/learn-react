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

// class TodoApp extends React.Component<{}, {}> {
//   render() {
//     return (
//       <div />
//     );
//   }
// }

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

let render: () => void;

const toggleTodo = (i: number) => {
  const sampleTodoItem = sampleTodoItems[i];
  sampleTodoItem.isCompleted = !sampleTodoItem.isCompleted;
  render();
};

render = () =>
  ReactDOM.render(
    <TodoList todos={sampleTodoItems} toggleTodoItem={toggleTodo} />,
    document.getElementById('root') as HTMLElement
  );

render();