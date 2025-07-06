import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

// const DummyProductData =
// ["Product 1",'Product 2','Product 3'];

function ProductList(props){
  //destructuring
  const {name,city,DummyProduct} =props;
  //the above line can be destructured directly in the fuction like this
  //function ProductList({name,city}) 
  // const flag=false;
const initilaState=false;
//useState hook
//syntax : const [stateVariable,method]
  const [flag, setFlag] = useState(initilaState)
  //initialState can be null/{}/[]/''/number/boolean

  const [count,setCount]=useState(0);
  const[changeStyle,setChangeStyle] = useState()
function handleToggleText(){
  setFlag(!flag);

}
function handleIncreaseCount(){
  setCount(count+1)
}
useEffect(()=>{
setFlag(!flag)
},[])//this will only run on page load once 

useEffect(()=>{
if(count==10) setChangeStyle(false)
},[count])

  // function renderTextBlock(getFlag){
  //   return getFlag ? (
  //     <h4>Name is {name}, he belongs to {city} and products being {DummyProduct} </h4> ):(
  //       <h4>hello Duniya</h4>
  //     )

    
  // }

  return (<div>
    <h3 className="title">Ecommerce Project</h3>
    <button onClick={handleToggleText}>Toggle Text</button>
    {/* <ProductItem/> */}
{/* to write anyting dynamic we start by using {}  */} 

{
  flag ? (<h4>{name} and {city}</h4>) : (<h4>hello</h4>)
}
<div>
  <button style={{backgroundColor : changeStyle ? 'white' : 'pink',color:changeStyle ? 'bule' : 'black'}}onClick={handleIncreaseCount}>Increase Count</button>
  <p>Count is {count}</p>
</div>
    {/* {renderTextBlock(flag)} */}
    <ul>
      {
        DummyProduct.map((item,index)=>(
          // <li key={index}>{item}</li>
          <ProductItem singleProductItem={item} key={index}/>
        ))
      }
    </ul>
  </div>
);
}
export default ProductList;
