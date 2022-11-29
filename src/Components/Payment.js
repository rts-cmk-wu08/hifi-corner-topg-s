import {FaCcVisa} from "react-icons/fa"
import {FaCcMastercard} from "react-icons/fa"
import {FaCcStripe} from "react-icons/fa"

const Payment = () => {
    return ( 
    <section>
        <FaCcStripe size={75}/>
        <FaCcVisa size={75}/>
        <FaCcMastercard size={75}/>
        <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
    </section>
     );
}
 
export default Payment;