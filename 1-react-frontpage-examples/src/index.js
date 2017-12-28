import React from "react";
import ReactDOM from "react-dom";

// 1. A Simple Component

class HelloMessage extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

ReactDOM.render(<HelloMessage name="Ties" />, document.getElementById("root"));

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(prevState => ({
//       seconds: prevState.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

