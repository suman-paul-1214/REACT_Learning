//import extranal css
import React from 'react';
//import './src/components/styling/External.css';
import styled from 'styled-components';
import './App.css'
import Skills from './components/CheckBoxex/Skills';
import ClassBasedComponent from './components/class-based-components'
import Clock from './components/clock/clock';
import DropDown from './components/clock/DropDown';
import FunctionalComponent from './components/functional-component'
import Controlled from './components/input_field/ControlledComponents';
import Input from './components/input_field/input';
import Loops from './components/loops/Loops';
import CollegeData from './components/loops/nestedLoop';
import User from './components/loops/user';
import ProductList from './components/products'
import RadioButton from './components/Radio Buttons/radio';
import StyleInline from './components/styling/inline';
import Demo from './components/useEffect/useEffect_insideComponent';
import Users from './components/users';
import UserProfile from './components/users/UserProfile';
import UnControlled from './components/unControlled Components/uncontrolled';
import User2 from './components/fnx as prop/User';
import FwdRefParent from './components/Ref/FwdRef';
import UseRef from './components/Ref/useRef';
import FwdRef from './components/Ref/FwdRef';

const DummyProductData =
["Product 1",'Product 2','Product 3'];



function App() {

  {/* declaring css modules 
     yeh apne aap me hio component hote hai*/}
  // const Heading =styled.h1`
  // color:red;
  // background-color: white`

  //or

  const Heading = styled.h1({
    color:"red",
  backgroundColor: 'white'
  });

  const StyledBtn = styled.button`
  color:red`

  //

  const displayName=(name)=>{
    alert(`${name}`)
  }

  const getUser=()=>{
    alert("get user function called")
    
  }
  return (
    <div>
      <h1>Jaan Ji</h1>
      {/* <ClassBasedComponent/> */}
      {/*<FunctionalComponent/> */}

      {/* <ProductList DummyProduct={DummyProductData} name="aji oji" city="Jamtara" /> */}

      {/* name="Rudra" is a prop name also the name of the key here name city and ... can be anything*/}
        <Users/>
        <Input/>
        <Controlled/>
        <Skills/>
        <RadioButton/>
        <Loops/>
        <DropDown/>

        <CollegeData/>

        {/* useEffect demo */}
        <Demo/>

        {/* Styling in react */}
        <StyleInline/>

        {/* using external css */}
        <h1 className='container'></h1>

        
        

        <UserProfile />
{/* using css modules */}
        <Heading>Hello Styled Comnponent</Heading>
        <Heading>dusri baar use</Heading>
        <StyledBtn>hello Ji</StyledBtn>

        <UseRef/>
         <br /><br />
        <h2>Uncontrolled Component</h2>
        <UnControlled/>

        <h1>Call Parent component function from child component </h1>
        <User2 displayName={displayName} name="suman" getUser={getUser}/>

        <User2 displayName={displayName} name="anisha" getUser={getUser}/>
        
        <User2 displayName={displayName} name="rudra" getUser={getUser}/>
        
        <User2 displayName={displayName} name="jaan" getUser={getUser}/>
        
        <User2 displayName={displayName} name="meri jaan" getUser={getUser}/>

       <FwdRef/>

    </div>
  )
}

export default App
