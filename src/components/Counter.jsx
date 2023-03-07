import React from "react";

const Counter = (props) => {
  return (
    <div>
      <p>Задание1</p>
      <h1>Счетчик</h1>
      <h2>{props.counter}</h2>
      <button onClick={props.decrement}>MINUS</button>
      <button onClick={props.increment}>PLUS</button>
    </div>
  );
};

export default Counter;
