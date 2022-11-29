import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css'
import { useLoaderData } from "react-router-dom"

const Slider = () => {
    const card = useLoaderData()
   

    return (
        <Slide indicators={true} autoplay={true}>
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
};

export default Slider;



