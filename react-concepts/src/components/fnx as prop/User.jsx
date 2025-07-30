function User2({displayName,name,getUser}){
  
  return (
    <>
      <button onClick={()=>displayName(name)}>Display Name</button>
      <button onClick={()=>getUser()}>get user</button>
      
    </>
  )
}

export default User2