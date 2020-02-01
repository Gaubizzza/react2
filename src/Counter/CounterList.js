import React from "react";

import CounterContainer from "./CounterContainer";

const renderCounters = number => {
  const result = [];

  for (let i = 0; i < number; i++) {
    result.push(<CounterContainer />);
  }

  return result;
};

const CounterList = ({ number, increase, remove }) => {
  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={remove}>-</button>
      {renderCounters(number)}
    </>
  );
};
export default CounterList;
