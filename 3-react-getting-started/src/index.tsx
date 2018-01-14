import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface User {
  firstName: string;
  lastName: string;
}

const formatName = (user: User) => user.firstName + ' ' + user.lastName;

const aUser = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(aUser)}!
  </h1>);

function getGreeting(user: User) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  element,
  document.getElementById('root') as HTMLElement
);