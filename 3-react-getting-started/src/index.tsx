import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ClockProps {
  date: Date;
}

class Clock extends React.Component<{}, ClockProps> {
  timerID: number;
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);