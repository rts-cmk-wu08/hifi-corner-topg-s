import {FaShoppingCart} from "react-icons/fa"
import { useState } from "react";
import "./Cart.css"
const Cart = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false)
    const handleClick =() => {setDropdownVisible(!dropdownVisible)}
    console.log(dropdownVisible)
    return (  
        <section className="Cart">
<FaShoppingCart onClick={handleClick} size={35} />
<div className={`cartContents ${dropdownVisible ? 'cartContents--visible' : ''}`}>
     
  
blabla
</div></section>
    );
}
 
export default Cart;