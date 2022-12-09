import { useState, useEffect } from "react";
import OrangeBtn from "./OrangeBtn"
//components/Counter.js


const Counter = (props) => {

const [ count, setCount] = useState(parseInt(localStorage.getItem(props.itemname))  || 0); 

useEffect(() => {
    console.log("hello from Counter Useffect!")
    localStorage.setItem(props.itemname, count)

}, [count, props.itemname]);

const handleIncrease = () => { if (count < 10) setCount(count + 1)}
   
   
const handleDecrease = () => { if (count > 0) setCount(count - 1)}
 
    

    return ( 
        <>
    <button onClick={handleDecrease}>-</button>
    <div>
    <p>{count}</p>
    </div>
    <button onClick={handleIncrease}>+</button>
      </> 
     );
}
 
export default Counter;