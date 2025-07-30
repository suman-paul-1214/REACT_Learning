import { useRef } from "react";

const UnControlled=()=>{

  const userRef=useRef(null)
  const passwordRef=useRef()


  const handleForm=(event)=>{
    event.preventDefault();
    const user=document.querySelector("#user").value
        const userPass=document.querySelector("#password").value

    console.log(user,userPass);
  }
  const handleFormRef=(event)=>{
    event.preventDefault();
    const user=userRef.current.value
    console.log(user);
    
  }
  return(
    <>
    <form action="" method="post" onSubmit={handleForm}>
      <input type="text" id="user" placeholder="Name"/>
      <br /><br />
      <input type="text" id="password" placeholder="Password"/>
      <br /><br />
      <button>
        Submit
      </button>
    </form>
    <hr />
    <h1>Un Controlled component with useRef Hook</h1>
    <form action="" method="post" onSubmit={handleFormRef}>
      <input type="text" id="userRef" placeholder="Name" ref={userRef}/>
      <br /><br />
      <input type="text" id="passwordRef" placeholder="Password" ref={passwordRef}/>
      <br /><br />
      <button>
        Submit with Ref
      </button>
    </form>
    </>
  )
}

export default UnControlled