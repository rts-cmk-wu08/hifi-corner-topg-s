import Navigation from "../Components/Navigation";
import SearchBar from "../Components/SearchBar";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"
import "./Header.css"
const Header = () => {
    return ( 
        <header>
            <Navigation header="true" logo="true"></Navigation>
            <SearchBar/>
            <FaUser className="user-icon"/>
            <FaShoppingCart className="cart-icon"/>
            <FaSearch className="search-icon" />
        </header>
     );
}
 
export default Header;