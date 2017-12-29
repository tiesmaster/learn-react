import React from "react";
import ReactDOM from "react-dom";

import Remarkable from "remarkable";

// 1. A Simple Component

// eslint-disable-next-line no-unused-vars
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// ReactDOM.render(<HelloMessage name="Ties" />, document.getElementById("root"));

// 2. A Stateful Component

// eslint-disable-next-line no-unused-vars
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

// ReactDOM.render(<Timer />, document.getElementById("root"));

// 3. An Application

// eslint-disable-next-line no-unused-vars
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    const newItem = { id: Date.now(), text: this.state.text };
    this.setState(prevState => ({
      text: "",
      items: prevState.items.concat(newItem)
    }));
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    );
  }
}

// ReactDOM.render(<TodoApp />, document.getElementById("root"));

// 4. A Component Using External Plugins

// eslint-disable-next-line no-unused-vars
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "Type some *markdown* here!" };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
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

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));
