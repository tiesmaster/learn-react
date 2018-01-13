import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import styled from 'styled-components';

const GameInfo = styled.div`
  margin-left: 20px;
`;

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
`;

const GameShell = styled.div`
  display: flex;
  flex-direction: row;
`;

type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  handleClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <SquareButton onClick={props.handleClick}>
      {props.value}
    </SquareButton>);
}

class Board extends React.Component<{
  squares: SquareValue[],
  handleClickOnSquareWithIndex: (index: number) => void
}> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        handleClick={() => this.props.handleClickOnSquareWithIndex(i)}
      />
    );
  }
  render() {
    return (
      <div>
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

class Game extends React.Component<{}, {
  xIsNext: boolean,
  stepNumber: number,
  history: { squares: SquareValue[] }[]
}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClickOnSquareWithIndex(index: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );

    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <GameShell>
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClickOnSquareWithIndex={(i) => this.handleClickOnSquareWithIndex(i)}
          />
        </div>
        <GameInfo>
          <div>{status}</div>
          <ol>{moves}</ol>
        </GameInfo>
      </GameShell>
    );
  }
  calculateWinner(squares: SquareValue[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root') as HTMLElement
);