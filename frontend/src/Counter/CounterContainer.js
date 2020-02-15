import React from "react";
import Counter from "./Counter";

class CounterContainer extends React.PureComponent {
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  state = {
    count: 0
  };

  plus = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <Counter count={this.state.count} plus={this.plus} minus={this.minus} />
    );
  }
}

export default CounterContainer;
