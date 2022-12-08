import {FaShoppingCart} from "react-icons/fa"
import { useState, useContext } from "react";
import "./Cart.css"
import OranegBtn from "./OrangeBtn";

import { Cartcontext } from "../Contexts/Cartcontext";
const Cart = () => {
const { cartItems } = useContext(Cartcontext)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const handleClick =() => {setDropdownVisible(!dropdownVisible)}
    console.log(dropdownVisible)
    return (  
        <section className="Cart">
<FaShoppingCart onClick={handleClick} size={35} />
<div className={`cartContents ${dropdownVisible ? 'cartContents--visible' : ''}`}>
<h2>Cart</h2>
<p>total items : { cartItems }</p>
<OranegBtn text="Go to cart"/>
<OranegBtn text="Go to Payments"/>
</div>


</section>
    );
}
 
export default Cart;