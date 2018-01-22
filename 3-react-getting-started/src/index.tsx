import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Reservation extends React.Component<{}, { isGoing: boolean, numberOfGuests: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    // if (target.type === 'checkbox') {
    //   this.setState({ isGoing: target.checked });
    // } else {
    //   this.setState({ numberOfGuests: +target.value });
    // }
    const value = target.type === 'checkbox' ? target.checked : +target.value;
    const name = target.name;

    const partialState = {};
    partialState[name] = value;

    this.setState(partialState);
  }
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);