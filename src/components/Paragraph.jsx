import React, { useState } from "react";

const Paragraph = () => {
  const [password, setPassword] = useState("");
  const [save, setSave] = useState([]);
  console.log(save);
  return (
    <div>
      <p>Задание2</p>
      <input
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setSave([...save, password])}>SHOW ME</button>
      {save.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Paragraph;
