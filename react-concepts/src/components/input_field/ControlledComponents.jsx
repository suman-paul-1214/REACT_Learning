//A controlled component is a form whose input field value is controlled by React's state

import { useState } from "react"

//how it works 
// Store input field value in State
// use change handler with input filed 
// value attribute attached with State

//Benifits

// Single Source Of Truth(eak input filed ki value eak state ke sath hi attach hoti hai wos state me jo v change hoga aapko input field me dikh jayega)

// Validation and manipulation before submit
// dynamically updates value

function Controlled(){
  const [name,SetName]=useState('')
  const [password,SetPassword]=useState('')
  const [email,SetEmail]=useState('')
  return (
    <>
      <h1>
          Controlled Components
      </h1>
      {/* <form action="" method="get"> */}
        <input type="text" onChange={(event)=>SetName(event.target.value)} placeholder="Enter Name" value={name}/>
        <br />

        <input type="password" onChange={(event)=>SetPassword(event.target.value)}placeholder="Enter Password"value={password}/>
        <br /> 
        <input type="text" placeholder="Enter email" value={email} onChange={(event)=>SetEmail(event.target.value)}/>
        <br />
        <button>Submit</button>
        <button onClick={()=>{SetEmail('');SetName('');SetPassword('')}}>Clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      {/* </form> */}
    </>
  )
}

export default Controlled

