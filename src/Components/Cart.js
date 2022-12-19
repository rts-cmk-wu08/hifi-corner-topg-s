import {FaShoppingCart} from "react-icons/fa"
import { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Cart.css"
import { Cartcontext } from "../Contexts/Cartcontext";
const Cart = () => {
    const {pathname} = useLocation();
const {  cartItems, totalPrice,handleRemoveFromCart,handleDecrease,handleIncrease } = useContext(Cartcontext)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const handleClick =() => {setDropdownVisible(!dropdownVisible)
    console.log("hello")
    }
    console.log(dropdownVisible)
    useEffect(() => {
    setDropdownVisible(false)
    }, [pathname]);

    return (  
        <section className="Cart">
<FaShoppingCart onClick={handleClick} size={35} />
<div className={`cartContents ${dropdownVisible ? 'cartContents--visible' : ''}`}>  
<h2>Cart</h2>
 {cartItems.map((item) => (
    <section className="cartItem">
        <button className="Removebtn--cart" onClick={()=>{handleRemoveFromCart(item.id)}}>X</button>
        <div className="cartItem__info">
        <img className="Cartimg" src={item.imageUrl} alt=""/>
            <h3>{item.name}</h3>
        </div>
        <div className="Cart--Counter">   
            <button onClick={()=>{handleDecrease(item.id)}}>-</button>
        <p className="Counter--number">{item.count}</p>
        <button onClick={()=>{handleIncrease(item.id)}}>+</button>
        <p className="Cartprice">{    Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(item.price)}</p>
        </div>
      
    </section>
))}
<p>{ Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'})
    .format(totalPrice) }</p>
<div className="Btn-space">
<Link to="Cart-page"><button className="Lintobtns">Go to cart</button></Link>
<button className="Lintobtns">Go to payment</button></div>
</div>



</section>
    );
}
 
export default Cart;