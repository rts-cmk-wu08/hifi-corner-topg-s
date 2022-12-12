import {FaShoppingCart} from "react-icons/fa"
import { useState, useContext } from "react";
import "./Cart.css"
import OranegBtn from "./OrangeBtn";

import { Cartcontext } from "../Contexts/Cartcontext";
const Cart = () => {
const { cartCount, cartItems, totalPrice,handleRemoveFromCart,handleDecrease,handleIncrease } = useContext(Cartcontext)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const handleClick =() => {setDropdownVisible(!dropdownVisible)
    console.log("hello")
    }
    
    console.log(dropdownVisible)
   
    return (  
        <section className="Cart">
<FaShoppingCart onClick={handleClick} size={35} />
<div className={`cartContents ${dropdownVisible ? 'cartContents--visible' : ''}`}>  
<h2>Cart</h2>
 {cartItems.map((item) => (
    <div className="cartItem">
        <button onClick={()=>{handleRemoveFromCart(item.id)}}>X</button>
        <img src={item.imageUrl} alt=""/>
        <div className="cartItem__info">
            <h3>{item.name}</h3>
            <p>Price: {    Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(item.price)}</p>
            <p>Quantity: {item.count}</p>
        </div>
        <button onClick={()=>{handleIncrease(item.id)}}>+</button>
        <button onClick={()=>{handleDecrease(item.id)}}>-</button>
    </div>
))}
<p>total items : { cartCount }</p>
<p>total price : { Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(totalPrice) }</p>

<OranegBtn text="Go to cart"/>
<OranegBtn text="Go to Payments"/>
</div>


</section>
    );
}
 
export default Cart;