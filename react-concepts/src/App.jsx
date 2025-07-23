
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
import Users from './components/users';

const DummyProductData =
["Product 1",'Product 2','Product 3'];



function App() {

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
    </div>
  )
}

export default App
