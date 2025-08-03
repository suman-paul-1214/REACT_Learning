import { useFormStatus } from "react-dom"

const UseFormStatus=()=>{
  const handleSubmit=async ()=>{
    await new Promise(res=>setTimeout(res,2000))
    console.log("submit");
    
  }

  function CustomerForm(){
    const {pending }=useFormStatus()
    return(
      <>
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <button disabled={pending}>{pending?'Submitting' : 'Submit'}</button>
      </>
    )
  }
  return (
    <>
      <h1>UseFormStatus </h1>
      <form action={handleSubmit}>
        <CustomerForm/>

      </form>
    </>
    )
}

export default UseFormStatus

// without form useFormStatus kaam nahi karega 