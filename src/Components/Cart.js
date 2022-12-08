import {FaShoppingCart} from "react-icons/fa"
import { useState, useContext } from "react";
import "./Cart.css"
import OranegBtn from "./OrangeBtn";

import { Cartcontext } from "../Contexts/Cartcontext";
const Cart = () => {
const { bookings} = useContext(Cartcontext)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const handleClick =() => {setDropdownVisible(!dropdownVisible)}
    console.log(dropdownVisible)
    return (  
        <section className="Cart">
<FaShoppingCart onClick={handleClick} size={35} />
<div className={`cartContents ${dropdownVisible ? 'cartContents--visible' : ''}`}>
<h2>Cart</h2>
<OranegBtn text="Go to cart"/>
<OranegBtn text="Go to Payments"/>
</div>
<p>no of bookings : {bookings}</p>
</section>
    );
}
 
export default Cart;