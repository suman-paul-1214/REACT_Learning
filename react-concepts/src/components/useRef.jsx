import { useRef } from "react"

function UseRef(){
  const inputRef =useRef(null)
  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus() //to focus on input box
    inputRef.current.style.color='blue'
    inputRef.current.placeholder="enter password"
    inputRef.current.value=123
  }
  return(
    <>
      <h1>UseRef</h1>
      <input ref={inputRef}
      type="text" placeholder="Kuch To Daal" />
      <button onClick={inputHandler}>Click to focus on input box</button>
    
    </>
    
    
  )
}

export default UseRef