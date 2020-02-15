import React from "react";

const Counter = props => {
  return (
    <>
      <h2>{props.count}</h2>
      <button onClick={props.plus}>+</button>
      <button onClick={props.minus}>-</button>
    </>
  );
};

export default Counter;
