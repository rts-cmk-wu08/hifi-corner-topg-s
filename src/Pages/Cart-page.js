import { Cartcontext } from "../Contexts/Cartcontext";
import {  useContext } from "react";
import "./Cart-page.css"
const Cartpage = () => {
    const {cartItems, totalPrice,handleRemoveFromCart,handleDecrease,handleIncrease } = useContext(Cartcontext)
    return ( 
        <section>
      <h1>Cart</h1>
     {cartItems.map((item) => (  
        <div className="Cartpage--card"> 
            <button className="Removebtn" onClick={()=>{handleRemoveFromCart(item.id)}}>X</button>
     <img src={item.imageUrl} alt=""/>
     <h3>{item.name}</h3>
     <div className="Cart--Counter">
     <button onClick={()=>{handleDecrease(item.id)}}>-</button>
     <p className="Counter--number">{item.count}</p>
     <button onClick={()=>{handleIncrease(item.id)}}>+</button>
     </div>   
     <p>{    Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(item.price)}</p>

     </div>    
))}

<p className="totalPrice">Sub total: { Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(totalPrice) }</p>
     </section>
     );
     
}
 
export default Cartpage;