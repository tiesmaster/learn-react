import * as React from 'react';
import * as ReactDOM from 'react-dom';

function ListItem(props: { value: number }) {
  const value = props.value;
  return (
    <li key={value.toString()}>
      {value}
    </li>
  );

}

function NumberList(props: { numbers: number[] }) {
  const listItems = props.numbers.map((i) =>
    <ListItem key={i} value={i} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);