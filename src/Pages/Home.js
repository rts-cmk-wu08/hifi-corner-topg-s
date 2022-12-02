import HomePageVideo from "../Components/HomePageVideo";
import Cards from "../Components/Cards"
import OranegBtn from "../Components/OrangeBtn";
import InfoContainerHome from "../Components/InfoContainerHome";
import './home.css'
import { Link } from "react-router-dom";

const Home = () => {

  
    
    return (
        <>
        <HomePageVideo/>
        <section className="headlineWrapper">
        <h1>popular products</h1>
        <Link to={"/products/"}><OranegBtn text="See all products"/></Link>
        </section>
        <section className="products">
        <Cards/>
        </section>
        <InfoContainerHome/>

      

        </>
    
     );
}
 
export default Home;