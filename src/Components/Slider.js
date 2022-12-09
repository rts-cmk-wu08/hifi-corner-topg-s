import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css'
import { useLoaderData } from "react-router-dom"


// const Slider = () => {
//     const card = useLoaderData()
   

//     return (
//         <Slide indicators={true} autoplay={true}>
//             <div className="each-slide-effect">
//                <img src={card.imageUrl} alt="" />
//             </div>

//             <div className="each-slide-effect">
//                 <img src={card.imageUrl} alt="" />
//             </div>

//             <div className="each-slide-effect">
//                <img src={card.imageUrl} alt="" />
//             </div>

//         </Slide>
//     );
// };

// export default Slider;



const Slider = () => {
    const card = useLoaderData()

    return ( 
<Slide indicators={true} autoplay={true} nextArrow={<button style={{
  background: 'none',
  border: '0px',
  width: '30px'
}}><svg width="39" height="66" viewBox="0 0 39 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49914 65.2542C4.09183 65.2542 2.68383 64.7232 1.61133 63.6612C-0.537109 61.5372 -0.537109 58.0963 1.61133 55.9723L25.2304 32.6292L1.61133 9.28198C-0.537109 7.15796 -0.537109 3.71704 1.61133 1.59302C3.75977 -0.531006 7.24023 -0.531006 9.38867 1.59302L36.8887 28.7805C39.0371 30.9045 39.0371 34.3455 36.8887 36.4695L9.38867 63.657C8.31445 64.7275 6.9068 65.2542 5.49914 65.2542Z" fill="#D2D2D2"/>
</svg>
</button>} prevArrow={<button style={{
  background: 'none',
  border: '0px',
  width: '30px'
}}><svg width="39" height="66" viewBox="0 0 39 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9991 65.25C31.5918 65.25 30.1838 64.719 29.1113 63.657L1.61133 36.4695C-0.537109 34.3455 -0.537109 30.9045 1.61133 28.7805L29.1113 1.59302C31.2598 -0.531006 34.7402 -0.531006 36.8887 1.59302C39.0371 3.71704 39.0371 7.15796 36.8887 9.28198L13.2765 32.625L36.8921 55.9723C39.0405 58.0963 39.0405 61.5372 36.8921 63.6612C35.8179 64.7232 34.4085 65.25 32.9991 65.25Z" fill="#D2D2D2"/>
</svg>
</button>}>


         <div className="each-slide-effect">
                <img src={card.imageUrl} alt="" />
            </div>

            <div className="each-slide-effect">
                 <img src={card.imageUrl} alt="" />
             </div>

             <div className="each-slide-effect">
                <img src={card.imageUrl} alt="" />
             </div>

    </Slide>

     );
}
 
export default Slider;

    



