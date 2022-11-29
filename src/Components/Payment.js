import {FaCcVisa} from "react-icons/fa"
import {FaCcMastercard} from "react-icons/fa"
import {FaCcStripe} from "react-icons/fa"

const Payment = () => {
    return ( 
    <>
        <FaCcStripe size={75}/>
        <FaCcVisa size={75}/>
        <FaCcMastercard size={75}/>
    </>
     );
}
 
export default Payment;