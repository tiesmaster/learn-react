import * as React from 'react';
import * as ReactDOM from 'react-dom';

function formatDate(date: Date) {
  return date.toDateString();
}

interface User {
  name: string;
  avatarUrl: string;
}

function Avatar(props: { user: User }) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props: { user: User }) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

interface CommentProps {
  author: User;
  text: string;
  date: Date;
}

function Comment(props: CommentProps) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const author = {
  avatarUrl: 'https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  name: 'Ties'
};

const element = (
  <Comment
    author={author}
    text="This is the text of the comment."
    date={new Date()}
  />
);

ReactDOM.render(element, document.getElementById('root'));