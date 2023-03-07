import React, { useState } from "react";
import Counter from "./components/Counter";
import Edit from "./components/Edit";
import Paragraph from "./components/Paragraph";
import Table from "./components/Table";

let workers = [
  {
    name: "Saltanat",
    age: 18,
    lastName: "Kurmankulova",
    days: 1,
    salaryPerDay: 20,
  },
  { name: "Anton", age: 26, lastName: "He", days: 6, salaryPerDay: 10 },
  { name: "Dastan", age: 23, lastName: "He", days: 19, salaryPerDay: 28 },
];

const App = () => {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Paragraph />
      <Table workers={workers} />
      <Edit workers={workers} />
    </div>
  );
};

export default App;
