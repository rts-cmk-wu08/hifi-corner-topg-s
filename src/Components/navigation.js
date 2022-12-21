import { Link } from "react-router-dom";
import "./Navigation.css"

import logoImgsml from "../img/hifiLogosml.png"

const Navigation = ({header,logo}) => {
   
    return ( 
        <nav>
          {logo &&  "true" ?  <Link  to='/'><img src={logoImgsml} alt="" /></Link> : <Link className="Linked--color" to='/'><p>Home</p></Link>}
         
          <Link className="Linked--color" to='/about'><p>About Us</p></Link>
          <Link className="Linked--color" to='/products'><p>Shop</p></Link>

          {header && (
            <Link className="contactUs" to="/Contact"><p>Contact Us</p></Link>
          )}
        </nav>
     );
}
 
export default Navigation;


