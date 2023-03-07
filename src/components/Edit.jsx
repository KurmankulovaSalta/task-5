import React from "react";

const Edit = (props) => {
  return (
    <div>
      {props.workers.map((item) => (
        <div>
          <input type="text" value={item.days} />
          <input type="text" value={item.salaryPerDay} />
        </div>
      ))}
    </div>
  );
};

export default Edit;
