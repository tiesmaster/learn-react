import * as React from 'react';
import * as ReactDOM from 'react-dom';

function formatDate(date: Date) {
  return date.toDateString();
}

function Comment(props: {
  author: {
    avatarUrl: string,
    name: string;
  };
  text: string;
  date: Date;
}) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
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