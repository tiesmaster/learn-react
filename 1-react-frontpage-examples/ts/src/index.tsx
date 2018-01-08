import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormEvent, ChangeEvent } from 'react';

import Remarkable from 'remarkable';

const mountNode = document.getElementById('root') as HTMLElement;

// 1. A Simple Component

class HelloMessage extends React.Component<{ name: string }> {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

// ReactDOM.render(<HelloMessage name="Ties" />, mountNode);

// 2. A Stateful Component

class Timer extends React.Component<{}, { seconds: number }> {
  interval: number;
  constructor(props: {}) {
    super(props);
    this.state = { seconds: 0 };
  }
  componentDidMount() {
    this.interval = window.setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
  }
  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

// ReactDOM.render(<Timer />, mountNode);

// 3. An Application

class TodoApp extends React.Component<{}, { currentInput: string, items: TodoItem[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { currentInput: '', items: [] };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTextChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ currentInput: e.currentTarget.value });
  }
  // tslint:disable-next-line:no-any
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo = { id: Date.now().toString(), value: this.state.currentInput };
    this.setState(prevState => ({ currentInput: '', items: prevState.items.concat(newTodo) }));
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTextChange} value={this.state.currentInput} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

interface TodoItem {
  id: string;
  value: string;
}

class TodoList extends React.Component<{ items: TodoItem[] }, {}> {
  render() {
    return (
      <ul>
        {this.props.items.map(todo => <li key={todo.id}>{todo.value}</li>)}
      </ul>
    );
  }
}

// ReactDOM.render(<TodoApp />, mountNode);

// 4. A Component Using External Plugins

class MarkdownEditor extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }
  handleChange(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ value: e.currentTarget.value });
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div>
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, mountNode);