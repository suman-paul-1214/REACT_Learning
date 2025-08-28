import { useActionState } from "react";
const handleSubmit=async (preData,formData)=>{
  let name=formData.get('name')

  let email=formData.get("email")
 
  
  await new Promise(res=>setTimeout(res,2000))

   //console.log(name,email);
   if(name&&email){
    return{message:'Data Submitted',name,email}
   }
   else{
    return {error:"Failed To submit enter proper Data ",name,email}
   }
}
const Parent4=()=>{
  const [data,action,pending] = useActionState(handleSubmit,undefined)//undefined shows no initial value
  // data is used to store the data of the form 
  //action is a function 
  //pending shows the state of the action whether it is pending or not
  console.log(data);
  
  return(
    <div>
        <hr />
        <form action={action}>
          <input type="text" placeholder="enter name" name="name" defaultValue={data?.name}/>
          <br />
          <input type="email" placeholder="enter email" name="email" defaultValue={data?.email}/>
          <br />
          <button disabled={pending}>
            Submit Data
          </button>
          {
            data?.error && <span style={{color:'red'}}>{data?.error}</span>}
            {data?.message && <span>{data?.message}</span>
          }
        </form>
        <br />
        <h3>Name : {data?.name}</h3>
        <h3>Email : {data?.email}</h3>
    </div>
  )
}

export default Parent4;
//useActionState hook used to handle form in React js
//it updates state on the result of a form action
