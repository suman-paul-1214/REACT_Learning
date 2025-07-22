import { useState } from "react"

function Skills(){
  const[skills, setSkills] = useState([]);
  const handleSkills=(event)=>{
    console.log(event.target.value,event.target.checked);

    if(event.target.checked){
      setSkills([...skills, event.target.value]);
    }
    else{
      setSkills([...skills.filter((skill) => skill != event.target.value)]);
    }
    
  }

  return (
    <>
    <h1>Select Your Skills</h1>
    <input onChange={handleSkills} type="checkbox" id="php" value={"PHP"}/><label htmlFor="php">PHP</label>

    <input onChange={handleSkills}type="checkbox" id="c" value={"C++"}/><label htmlFor="c">C++</label>

    <input onChange={handleSkills}type="checkbox" id="python" value={"Python"} /><label htmlFor="python">Python</label>

    <h1>{skills.toString()}</h1>
    </>
    
  )
}

export default Skills