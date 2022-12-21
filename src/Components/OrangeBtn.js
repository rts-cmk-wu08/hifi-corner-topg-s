import './orangeBtn.css'
const OranegBtn = ({text, onclickBtn, func}) => {


    return ( 
    <>
        {onclickBtn  ? <button onClick={func} className='orangeBtn'>{text}</button> : <button className='orangeBtn'>{text}</button>}
    </>

     );
}
 
export default OranegBtn;


//  Når knappen skal implimenteres i fx App.js <OrangeBtn text="Read more"/> 