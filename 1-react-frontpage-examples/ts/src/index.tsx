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