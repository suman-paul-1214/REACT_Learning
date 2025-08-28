import { useId } from "react";
function Parent5(){
  return(
    <div>
      <UserForm/>
    </div>
  )
}

function UserForm(){
  const user=useId()
  return(
    <div>
      <form action=""></form>
      <label htmlFor={user+"name"}>Enter Name</label>
      <input type="text" id={user+'name'} name="name"/>
      <br />
      <label htmlFor={user+"email"}>Enter Email</label>
      <input type="email" id={user+'email'} name="email"/>

    </div>
  )}

  export default Parent5;