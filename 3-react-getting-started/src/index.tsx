import * as React from 'react';
import * as ReactDOM from 'react-dom';

class NameForm extends React.Component<{}, { value: string[] }> {
  fileInput: HTMLInputElement | null;
  constructor(props: {}) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.fileInput != null && this.fileInput.files != null) {
      alert(
        `Selected file - ${
        this.fileInput.files[0].name
        }`
      );
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
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