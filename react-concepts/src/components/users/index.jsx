import {useState } from "react";



export default function Users(){

  const [usersList,setUserList]=useState([]);
  const [pending,setPending] = useState(true);
  
 
  

    async function fetchAllUsers() {
      try{
          setPending(true)
          const apiResponse = await fetch('https://dummyjson.com/users')
          const result = await apiResponse.json()
          console.log(result);
          if(result?.users){
            setPending(false)
            setUserList(result?.users)
            setPending(false)
          }
          else{
            setUserList([])
            setPending(false)
          }
      }catch(error){
        console.log(error);
        
      }
      
    }
  //    function handleFtechListOfUsers(){
  //   fetchAllUsers()
  // }
  
    
  //   useEffect(()=>{fetchAllUsers()
  // },[])

  
  if(pending)  <h1>Fetching Users</h1>
  return <div>
    <h1>All Users Lists</h1>
    <button onClick={fetchAllUsers}>Fetch Users</button>
    <ul>
      {
        usersList && usersList.length > 0 ? 
        usersList.map(userItem=> <li key={userItem?.id}>
          <p>{userItem?.firstName} {userItem.lastName}</p>
        </li>) : <h1>No user Found !</h1>
      }
    </ul>
  </div>
}