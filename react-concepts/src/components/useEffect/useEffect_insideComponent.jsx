import { useState } from "react";
import { useEffect } from "react";

const Demo=()=> {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  //function callOnce() {
    console.log("Button clicked!");
  //}
  // callOnce() - this will be called on every render
  //to handle side effects, we use useEffect hook
  useEffect(() => {
    //callOnce();
  }, []);// empty dependency array means this effect runs only once after the initial render

  useEffect(() => {
    counterFounction();
  }, [count]);
// this effect runs only when count changes

  const counterFounction = () => {
    console.log("Counter function called",(count));
  };
  return (
    <div>
      <h2>Handling sideeffects with useEffect hook</h2>
      <button onClick={() =>setCount(count+1)}>Count {count}</button>

      <button onClick={() =>setData(data+1)}>Data {data}</button>
    </div>
  );
}
export default Demo;

/* types of useEffect
1. Runs after every render
useEffect(() => {
  // This code runs after every render
  console.log("Component rendered or updated");
}, [count]);

2. Runs only once (componentDidMount)
useEffect(() => {
  // This code runs only once after the initial render
  console.log("Component mounted");
}, []);
3.Runs every time
useEffect(() => {
  // This code runs every time the component renders
  console.log("Component rendered or updated");
});

4.runs when bothe count and data changes
useEffect(() => {  // This code runs when either count or data changes
  console.log("Count or data changed:", count, data);
}, [count, data]);

5. Called when props changes
useEffect(() => {
  // This code runs when the component receives new props
  console.log("Component received new props");
}, [props, props2]); // Add the props you want to watch

*/