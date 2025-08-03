import { useTransition } from "react"

function UseTransitionHook(){
  const [pending,startTransition] = useTransition()

  const handleButton=()=>{
    startTransition(async()=>{
      await new Promise(res => setTimeout(res,2000))
    })
  }
  return (
    <>
      <h3>UseTransitionHook</h3>{
        pending?<img style={{width :"100px"}}src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="" /> :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </>
  )
}

export default UseTransitionHook

//similar to useFormStatus but yeh tab useful hota jab aapke pass form wagera na ho
