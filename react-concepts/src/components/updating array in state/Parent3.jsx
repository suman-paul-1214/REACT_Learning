import { useState } from "react"

const Parent3=()=>{
  const [data,SetData]=useState([
    'rudra','anisha','anirudh'
  ])
  const [dataDetails,setDataDetails]=useState([
    {name:'Rudra',age:24},
    {name:'Anisha',age:22}
  ])

  const handleUser=(name)=>{
    data[data.length-1]=name
    SetData([...data])
  }
    //jab v aap arry ya object ko update karna chahate ho to aapko eak new copy dalni padti hai thats why we use spread operator otherwise reference ke wajh se properly ho nahi pata

    const handleUserDetails=(age)=>{
    dataDetails[dataDetails.length-1].age=age
    setDataDetails([...dataDetails])
  }
  return(
    <div>
      <h1>Updating Array in States</h1>
      <input type="text" onChange={(event)=>handleUser(event.target.value)}/>
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
  ))
      }
      <hr />
      <input type="text" onChange={(e)=>handleUserDetails(e.target.value)}/>
      {
        dataDetails.map((item,index)=>(
          <h4 key={index}>{item.name},{item.age}</h4>
        ))
      }
    </div>
  )
}

export default Parent3