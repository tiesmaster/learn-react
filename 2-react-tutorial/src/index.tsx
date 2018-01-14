import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import styled from 'styled-components';

import { createStore } from 'redux';

type ActionTypes =
  | IncrementAction
  | DecrementAction
  | OtherAction;

enum TypeKeys {
  INC = 'INC',
  DEC = 'DEC',
  OTHER_ACTION = '__any_other_action_type__'
}

interface IncrementAction {
  type: TypeKeys.INC;
  by: number;
}

interface DecrementAction {
  type: TypeKeys.DEC;
  by: number;
}

interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}

interface State {
  counter: number;
}

function counterReducer(s: State = { counter: 0 }, action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.INC:
      return { counter: s.counter + action.by };
    case TypeKeys.DEC:
      return { counter: s.counter - action.by };
    default:
      return s;
  }
}

let store = createStore(counterReducer);

store.subscribe(() =>
  // tslint:disable-next-line
  console.log((store.getState() as any).counter)
);

store.dispatch({ type: 'INC', by: 1 });
store.dispatch({ type: 'INC', by: 1 });
store.dispatch({ type: 'DEC', by: 1 });

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

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const MoveList = styled.ol`
  padding-left: 30px;
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

interface BoardProps {
  squares: SquareValue[];
  handleClickOnSquareWithIndex: (index: number) => void;
}

class Board extends React.Component<BoardProps> {
  renderSquare(index: number) {
    return (
      <Square
        value={this.props.squares[index]}
        handleClick={() => this.props.handleClickOnSquareWithIndex(index)}
      />
    );
  }
  render() {
    const renderRow = (rowIndex: number) => {
      const cols = [];
      for (let colIndex = 0; colIndex < 3; colIndex++) {
        cols.push(this.renderSquare((3 * rowIndex) + colIndex));
      }
      return cols;
    };
    const rows = [];
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      rows.push((
        <BoardRow>
          {renderRow(rowIndex)}
        </BoardRow>)
      );
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}

interface MoveState {
  squares: SquareValue[];
  moveLocation: number | null;
}

class Game extends React.Component<{}, {
  xIsNext: boolean,
  stepNumber: number,
  history: MoveState[]
}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        moveLocation: null
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
        squares: squares,
        moveLocation: index
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
        'Go to move #' + move + ' ' + this.calculateDisplayLocation(step.moveLocation as number) :
        'Go to game start';

      let className = '';
      if (move === this.state.stepNumber) {
        className = 'currentStep';
      }
      return (
        <li key={move} className={className}>
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
          <MoveList>{moves}</MoveList>
        </GameInfo>
      </GameShell>
    );
  }

  calculateDisplayLocation(location: number): string {
    const row = Math.floor(location / 3) + 1;
    const col = (location % 3) + 1;
    return '(' + row + ',' + col + ')';
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