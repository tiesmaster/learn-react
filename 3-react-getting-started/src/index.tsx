import * as React from 'react';
import * as ReactDOM from 'react-dom';

class NameForm extends React.Component<{}, { value: string[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: ['lime', 'mango'] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: React.FormEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value;
    alert(value);
    this.setState({ value: event.currentTarget.values });
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);