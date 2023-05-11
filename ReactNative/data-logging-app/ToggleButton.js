// ./ToggleButton.js
// A toggle button for displaying/hiding components.

import React, { useState } from "react";

const ToggleButton = (props) => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>{props.title}</button>
      {toggle && <div>{props.component}</div>}
    </>
  );
};
export default ToggleButton;
