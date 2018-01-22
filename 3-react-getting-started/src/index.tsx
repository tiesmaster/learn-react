import * as React from 'react';
import * as ReactDOM from 'react-dom';

const mountNode = document.getElementById('root');
ReactDOM.render(<input value="Ey" />, mountNode);

window.setTimeout(
  () => {
    ReactDOM.render(<input value={undefined} />, mountNode);
  },
  3000);