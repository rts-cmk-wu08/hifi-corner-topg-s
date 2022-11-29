import {FiPhone} from "react-icons/fi"
import {RiFacebookCircleLine} from "react-icons/ri"
import {RiYoutubeLine} from "react-icons/ri"
import {RiInstagramLine} from "react-icons/ri"
import {RiTwitterLine} from "react-icons/ri"

const Footerinfo = () => {
    return ( 
        <section>
            <p>Contact</p>
            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
            <div>
            <FiPhone/>
            <p>0131 556 7901</p>
            </div>
            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
            <div>
            <FiPhone/>
           <p>01324 629 011</p>
           </div>
           <div>
           <RiFacebookCircleLine/>
           <RiInstagramLine/>
           <RiTwitterLine/>
           <RiYoutubeLine/>
           </div>
        </section>
        
     );
}
 
export default Footerinfo;

