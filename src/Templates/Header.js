import Navigation from "../Components/Navigation";
import SearchBar from "../Components/SearchBar";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return ( 
        <header>
            <Navigation header="true" logo="true"></Navigation>
                <SearchBar/>
                <Link to="#">
                    <FaShoppingCart className="cart-icon"/>
                </Link>
                <Link to="#">
                    <FaUser className="user-icon"/>
                </Link>
                <FaSearch className="search-icon" />
        </header>
     );
}
 
export default Header;