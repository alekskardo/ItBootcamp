import React, { useState } from "react";

const Forma = ({ str }) => {
  const [input, setValue] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button>{str}</button>
      <p>{input}</p>
    </>
  );
};
export default Forma;
