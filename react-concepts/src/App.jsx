
import './App.css'
import ClassBasedComponent from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
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

    </div>
  )
}

export default App
