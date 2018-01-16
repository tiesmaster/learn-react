import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Clock(props: { date: Date }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

tick();
setInterval(tick, 1000);