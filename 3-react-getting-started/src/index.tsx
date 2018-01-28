import * as React from 'react';
import * as ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

// function BoilingVerdict(props: { celcius: number }) {
//   if (props.celcius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

class TemperatureInput extends React.Component<{ scale: 'c' | 'f' }, { temperature: string }> {
  constructor(props: { scale: 'c' | 'f' }) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTemperature = e.currentTarget.value;
    this.setState({ temperature: newTemperature });
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));