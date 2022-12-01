import Links from "../Components/Links";
import Navigation from "../Components/Navigation";
import Footerinfo from "../Components/Footerinfo";
import Payment from "../Components/Payment";
import "./Footer.css"
const Footer = () => {
    return ( 
        <footer className="Footer">
            <div className="Footer__flex">
 <Navigation/>
<Links/>
<Footerinfo/></div>
<Payment/>
        </footer>
     );
}
 
export default 
Footer;