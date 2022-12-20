import {FaCcVisa} from "react-icons/fa"
import {FaCcMastercard} from "react-icons/fa"
import {FaCcStripe} from "react-icons/fa"
import "./Payment.css"
const Payment = () => {
    return ( 
    <section className="payment--stripe"> 
    <div className="payment--adjustments">
        <FaCcStripe className="payment--methods stripe__color" size={75}/>
        <FaCcVisa className="payment--methods visa__color" size={75}/>
        <FaCcMastercard className="payment--methods mastercard__color" size={75}/>
        <p className="Footer__undertext">Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p></div>
    </section>
     );
}
 

// import { Visa } from "react-pay-icons";
// import { Mastercard } from "react-pay-icons";

/*{ <Visa className="visa"/>
<Mastercard style={{ margin: 10, width: 75 }} /> }*/


export default Payment;