import * as React from 'react';
import * as ReactDOM from 'react-dom';

function BoilingVerdict(props: { celcius: number }) {
  if (props.celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component<{}, { temperature: string }> {
  constructor(props: {}) {
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
    return (
      <fieldset>
        <legend>Enter temperature in Celcius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />

        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));