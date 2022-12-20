import Navigation from "../Components/Navigation";
import Cart from '../Components/Cart';
import SearchBar from "../Components/SearchBar";
import { FaUser} from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return ( 
        <header className="header">
            <Navigation header="true" logo="true"></Navigation>
                <div className="navigation-right">
                    <SearchBar/>
                  
                    <Link to="#">
                    <FaUser className="user-icon"/>
                </Link>  
                <Cart/>
                </div>
               
             
                
                
        </header>
     );
}
 
export default Header;