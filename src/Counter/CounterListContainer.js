import React from "react";
import CounterList from "./CounterList";
class CounterListContainer extends React.Component {
  state = {
    number: 0
  };

  increase = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  remove = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <CounterList
        number={this.state.number}
        increase={this.increase}
        remove={this.remove}
      />
    );
  }
}
export default CounterListContainer;
