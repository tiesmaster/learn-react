import * as React from 'react';
import * as ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

function toCelsius(farenheit: number) {
  return (farenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius: number) {
  return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (input: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// function BoilingVerdict(props: { celcius: number }) {
//   if (props.celcius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

type TemperatureInputProps = { scale: 'c' | 'f' };

class TemperatureInput extends React.Component<TemperatureInputProps, { temperature: string }> {
  constructor(props: TemperatureInputProps) {
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