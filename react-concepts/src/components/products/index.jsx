import ProductItem from "./components/product-item";
import "./style.css";

// const DummyProductData =
// ["Product 1",'Product 2','Product 3'];

function ProductList(props){
  //destructuring
  const {name,city,DummyProduct} =props;
  //the above line can be destructured directly in the fuction like this
  //function ProductList({name,city}) 
  const flag=false;
  function renderTextBlock(getFlag){
    return getFlag ? (
      <h4>Name is {name}, he belongs to {city} and products being {DummyProduct} </h4> ):(
        <h4>hello Duniya</h4>
      )

    
  }

  return (<div>
    <h3 className="title">Ecommerce Project</h3>
    {/* <ProductItem/> */}
{/* to write anyting dynamic we start by using {}  */} 
    {renderTextBlock(flag)}
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
