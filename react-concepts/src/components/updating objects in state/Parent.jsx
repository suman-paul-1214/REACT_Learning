import { useState } from "react"

function Parent2(){
  //const [name,SetName]=useState("Rudra")
  const [data,SetData]=useState({
    name:"Rudra",
    address:{
      city:'Delhi',
      country:'India'
    }
  })
  const handleUser=(val)=>{
    data.name=val
    console.log(data);
    SetData({...data})
    //SetName("Anisha Rudra")
  }
  const handleCity=(val)=>{
    data.address.city=val
    SetData({...data})
  }
  return(
    <div>
      <input type="text" placeholder="update name" onChange={(event)=>handleUser(event.target.value)}/>

      <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}/>
      <h2>Nmae:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    
    </div>
  )
}

export default Parent2