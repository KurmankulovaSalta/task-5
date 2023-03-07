import React from "react";
import "./Table.css";

const Table = (props) => {
  console.log(props);
  return (
    <div>
      <p>Задание 3</p>
      <table className="table">
        <thead>
          <tr className="tr">
            <td className="tr">Name</td>
            <td className="tr">LastName</td>
            <td className="tr">Days</td>
            <td className="tr">SalaryPerDay</td>
            <td className="tr">Salary</td>
          </tr>
        </thead>
        <tbody>
          {props.workers.map((item) => (
            <tr className="tr">
              <td className="td">{item.name}</td>
              <td className="td">{item.lastName}</td>
              <td className="td">{item.days}</td>
              <td className="td">{item.salaryPerDay}</td>
              <td className="td">{item.salaryPerDay * item.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
