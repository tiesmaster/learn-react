import * as React from 'react';
import * as ReactDOM from 'react-dom';

const mountNode = document.getElementById('root') as HTMLElement;

// 1. A Simple Component

class HelloMessage extends React.Component<{ name: string }> {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

ReactDOM.render(<HelloMessage name="Ties" />, mountNode);

// 2. A Stateful Component

class Timer extends React.Component<{}, { seconds: number }> {
  // tslint:disable-next-line:no-any
  interval: any;
  constructor(props: {}) {
    super(props);
    this.state = { seconds: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
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

ReactDOM.render(<Timer />, mountNode);