const User=({data})=>{
if (!data) return <p>No user data provided.</p>;


  return(
    <>
    <h2>User Component</h2>
    <p>Name: {data.name}</p>
    </>
  )
}

export default User;