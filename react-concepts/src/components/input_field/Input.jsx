import { useState } from "react";

function Input(){
  const [val,setVal]=useState("")
  return(
    <div>
      <h1>Get Input Values</h1>
      <input type="text" value={val} onChange={(event)=> setVal(event.target.value)} placeholder="Type Your Name"/>
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear Value</button>
    </div>
  )
}
export default Input;