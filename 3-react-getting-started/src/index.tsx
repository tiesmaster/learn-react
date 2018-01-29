import * as React from 'react';
import * as ReactDOM from 'react-dom';

function SplitPane(props: { left: React.ReactNode; right: React.ReactNode; }) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <h1>Contacts</h1>
  );
}

function Chat() {
  return (
    <h1>Chat</h1>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));