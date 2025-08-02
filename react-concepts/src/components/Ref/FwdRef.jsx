//referance kisi aur component me padi ho aur jispe reference apply karna hai woh kisi aur component me padi ho ,eak component se dusre component me reference vejna ho tab forward reference kaam aata hai
//Mostly in parent - child ke case me 
//jab referance padi ho parent component me aur jaha pe apply karna ho woh hai child component ke andr toh us ref ko parent se child me forward kar dete hai


import { useRef } from "react";
import UserInput from "./Child";


function FwdRef(){
  const inputRef=useRef()

  const updateInput=()=>{
    inputRef.current.value=1000
    inputRef.current.focus()
  }

  return(
    <>
    <h1>Parent Component</h1>
    <UserInput ref={inputRef}/>
    <button onClick={updateInput}></button>

    </>
  )
}

export default FwdRef;

