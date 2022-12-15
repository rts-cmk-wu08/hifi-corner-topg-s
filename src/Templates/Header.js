import Navigation from "../Components/Navigation";
import SearchBar from "../Components/SearchBar";
import "./Header.css"
const Header = () => {
    return ( 
        <header>
            <Navigation header="true" logo="true"></Navigation>
            <SearchBar/>
        </header>
     );
}
 
export default Header;