import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

type SquareValue = 'X' | 'O' | null;

class Square extends React.Component<{
  value: SquareValue,
  handleClick: () => void
}> {
  render() {
    return (
      <button className="square" onClick={() => this.props.handleClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component<{}, { squares: SquareValue[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        handleClick={() => this.handleClickForIndex(i)}
      />
    );
  }
  handleClickForIndex(index: number) {
    const squares = this.state.squares.slice();
    squares[index] = 'X';
    this.setState({ squares: squares });
    //
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root') as HTMLElement
);