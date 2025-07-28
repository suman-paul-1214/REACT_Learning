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
    </div>
  )
}

export default App
