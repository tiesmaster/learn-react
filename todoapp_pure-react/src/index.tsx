import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

interface TodoItem {
  taskTitle: string;
  isCompleted: boolean;
}

const TodoElement = (props: { todo: TodoItem }) =>
  (
    <div>
      <input type="checkbox" />
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

ReactDOM.render(
  <TodoElement todo={sampleTodoItem} />,
  document.getElementById('root') as HTMLElement
);