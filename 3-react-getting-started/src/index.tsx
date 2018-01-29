import * as React from 'react';
import * as ReactDOM from 'react-dom';

function FancyBorder(props: { children: JSX.Element[], color: string }) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));