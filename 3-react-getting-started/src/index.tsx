import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ClockProps {
  date: Date;
}

class Clock extends React.Component<{}, ClockProps> {
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
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

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

tick();
setInterval(tick, 1000);