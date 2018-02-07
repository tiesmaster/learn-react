import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

interface TodoItem {
  taskTitle: string;
  isCompleted: boolean;
}

const TodoElement = (props: { todo: TodoItem, toggleTodo: () => void }) =>
  (
    <div>
      <input
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange={() => props.toggleTodo()}
      />
      <span>{props.todo.taskTitle}</span>
    </div>
  );

// class TodoApp extends React.Component<{}, {}> {
//   render() {
//     return (
//       <div />
//     );
//   }
// }

const sampleTodoItem = {
  taskTitle: 'Finish this excercise',
  isCompleted: false
};

let render: () => void;

const toggleTodo = () => {
  sampleTodoItem.isCompleted = !sampleTodoItem.isCompleted;
  render();
};

render = () =>
  ReactDOM.render(
    <TodoElement todo={sampleTodoItem} toggleTodo={() => toggleTodo()} />,
    document.getElementById('root') as HTMLElement
  );

render();