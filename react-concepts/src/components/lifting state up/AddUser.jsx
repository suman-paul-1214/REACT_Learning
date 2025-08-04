function AddUser({setUser}){

  return(
    <div>
      <hr />
      <h1>Add User</h1>
      <input type="text" placeholder="Lifting State Up" onChange={(event)=>setUser(event.target.value)}/>
      <hr />
    </div>
  )
}

export default AddUser