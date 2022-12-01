import { useState, useEffect } from "react";

//components/Counter.js


const Counter = () => {

const [ count, setCount] = useState(0); 

useEffect(() => {
    console.log("hello from Counter Useffect!")

}, [count]);

const handleIncrease = () => { if (count < 10) setCount(count + 1)}
   
   
const handleDecrease = () => { if (count > 0) setCount(count - 1)}
 
    

    return ( 
        <>
  <p>{count}</p>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    
      </> 
     );
}
 
export default Counter;