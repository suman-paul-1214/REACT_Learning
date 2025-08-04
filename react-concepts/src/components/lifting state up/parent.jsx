import { useState } from "react"
import AddUser from "./AddUser"
import DisplayUser from "./DisplayUser"

const Parent=()=>{
  const [user,setUser]=useState('')
  return(
    <>
    <AddUser setUser={setUser} />
    <DisplayUser AddingUser={user}/>
    </>
  )
}

export default Parent