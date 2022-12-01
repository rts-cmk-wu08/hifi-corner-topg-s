import { Link } from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {
   
    return ( 
        <nav>
          <Link className="Linked--color" to='/'><p>Home</p></Link>
          <Link className="Linked--color" to='/about'><p>About</p></Link>
          <Link className="Linked--color" to='/products'><p>Shop</p></Link>
        </nav>
     );
}
 
export default Navigation;


