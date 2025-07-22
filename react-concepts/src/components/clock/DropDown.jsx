import { useState } from "react";
import Clock from "./clock";

function DropDown(){

const [color,setColor] = useState("red");

  return(
    <>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"purple"}>Purple</option>
      </select>

      <Clock color={color} />

    </>
  )
}

export default DropDown;