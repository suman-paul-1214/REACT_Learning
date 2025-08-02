// Child.jsx
import React, { forwardRef } from "react";

const UserInput = forwardRef((props, ref) => {
  return (
    <input type="text" placeholder="Child Input" ref={ref} />
  );
});

export default UserInput;
