import * as React from 'react';
import * as ReactDOM from 'react-dom';

function FancyBorder(props: { color: string; children: React.ReactNode; }) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props: { title: React.ReactNode; message: React.ReactNode; }) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!"
    />
  );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));