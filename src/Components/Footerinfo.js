import {FiPhone} from "react-icons/fi"
import {RiFacebookCircleLine} from "react-icons/ri"
import {RiYoutubeLine} from "react-icons/ri"
import {RiInstagramLine} from "react-icons/ri"
import {RiTwitterLine} from "react-icons/ri"
import "./Footerinfo.css"
const Footerinfo = () => {
    return ( 
        <section className="Footerinfo">
            <h3>Contact</h3>
            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
            <div className="Phonenumber">
            <FiPhone size={25}/>
            <p>0131 556 7901</p>
            </div>
            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
            <div className="Phonenumber">
            <FiPhone size={25}/>
           <p>01324 629 011</p>
           </div>
           <div className="Footer--logos">
           <RiFacebookCircleLine size={35}/>
           <RiInstagramLine size={35}/>
           <RiTwitterLine size={35}/>
           <RiYoutubeLine size={35}/>
           </div>
        </section>
        
     );
}
 
export default Footerinfo;

