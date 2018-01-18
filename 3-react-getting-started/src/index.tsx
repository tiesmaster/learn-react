import * as React from 'react';
import * as ReactDOM from 'react-dom';

function LoginButton(props: { onClick: () => void }) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: { onClick: () => void }) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props: {}) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: {}) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props: { isLoggedIn: boolean; children: React.ReactNode }) {
  const isLoggedIn = props.isLoggedIn;
  const greetingComponent = isLoggedIn
    ? <UserGreeting />
    : <GuestGreeting />;
  return (
    <div>
      {greetingComponent}
      {props.children}
    </div>
  );
}

class LoginControl extends React.Component<{}, { isLoggedIn: boolean }> {
  constructor(props: {}) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}>
          {button}
        </Greeting>
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);