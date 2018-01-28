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

function BoilingVerdict(props: { celcius: number }) {
  if (props.celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

type TemperatureInputProps = {
  temperature: string;
  scale: 'c' | 'f';
  onTemperatureChange: (newTemperature: string) => void;
};

class TemperatureInput extends React.Component<TemperatureInputProps> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTemperature = e.currentTarget.value;
    this.props.onTemperatureChange(newTemperature);
  }
  render() {
    const temperature = this.props.temperature;
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

class Calculator extends React.Component<{}, {
  temperature: string;
  scale: 'c' | 'f';
}> {
  constructor(props: {}) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelciusChange(newTemperature: string) {
    this.setState({ scale: 'c', temperature: newTemperature });
  }
  handleFahrenheitChange(newTemperature: string) {
    this.setState({ scale: 'f', temperature: newTemperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict
          celcius={parseFloat(celcius)}
        />

      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));