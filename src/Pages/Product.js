import { json, useLoaderData } from "react-router-dom"
import Slider from "../Components/Slider";
import './product.css'
import Counter from "../Components/Counter"
import OrangeBtn from "../Components/OrangeBtn"
import { click } from "@testing-library/user-event/dist/click";
import Cart from "../Components/Cart";
import {useContext} from "react"
import { Cartcontext } from "../Contexts/Cartcontext";


const Product = () => {
    const card = useLoaderData()
    
    const {HandleaddtoCart} = useContext(Cartcontext)
    
    function addToCart(){
        HandleaddtoCart({
        id:card.id,
        name:card.name,
        count:1,
        price:card.price,
        imageUrl:card.imageUrl
      })
        
        
    }



          




   
    return (
        <>
        <h1 className="product__headline">Product</h1>
        <section className="product__wrapper">

        <Slider/>
        
        <div className="infDes__wrapper">

        <div className="info__wrapper">
        <h2>{card.name}</h2>
        <h3>({card.category})</h3>
        </div>

        <div className="description__wrapper">
        <p>G2.1 is the next logical evolutionary step, resulting from a desire to improve upon the original G2 series. At AURALiC, we always work to create a new approach to digital music that pushes the boundaries of sonic quality. Incorporating state-of-the-art technologies and delivered with innovative features, G2.1 is built for ultimate levels of sonic performance.</p>
        <p>Every G2.1 series component, including the ARIES G2.1, sports an all-new industrial design that’s engineered to set a new standard for sound quality, enhance the user experience, and look every bit as good as it sounds with its contemporary aesthetic. Offering features like a copper enclosure, a high-mass base, and an enhanced suspension system optimizes the sound of the ARIES G2.1 and ensures it is the most capable and feature-rich way to introduce streaming to your audio system that we’ve ever created.</p> 
        </div>

        <div className="colors">
            <span className="colors__black"></span>
            <span className="colors__silver"></span>
            <span className="colors__gold"></span>
        </div>

        <div className="colors__names">
            <p>Black</p>
            <p>Silver</p>
            <p>Gold</p>
        </div>

        <div className="price__wrapper">
        <h4 className="product__price">£ {card.price}</h4>

        <div className="stock__wrapper">
        <p>In stock</p>
        <span className="green"></span>
        </div>
        </div>

        <div className="counterNdBtn__wrapper">
        <article className="counter__wrapper">
            <Counter/>
        </article>
            <OrangeBtn onclickBtn={true} func={addToCart} text="Add to cart"/>
        </div>


        </div>
    </section>


        <section className="specifications__wrapper">
            
            <span className="horBorder"></span>
            <h1>product specifications</h1>
            <article className="liveChat">
            <div className="specifications">
            {card.specifications.map((card,index) => (

                    <div className="eachSpecif__wrapper" key={index}>
                        <div className="specif__name">
                            <p>{card.name}</p>
                        </div>
                        <div className="specif__value">
                            <p>{card.value ? "Yes" : "No"}</p>

                        </div>
                    </div>

                ))}
            </div>

            <div className={isActive ? 'chat__wrapper hidden' : 'chat__wrapper'}>
            <ChatApp/>
            </div>
            </article>
           
   
        <button className= "liveChat__logo" onClick={handleClick}>
            {isActive ? <BsFillChatFill/> : <svg width="32" height="32" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.9069 4L4 37.0082" stroke="#FF781A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4L38.9069 37.0082" stroke="#FF781A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}
        </button>
        </section>

                

    </>

    )

}
 
export default Product;

export async function loader({ params }) { 


    const res = await fetch(
        "http://localhost:4000/products/" + params.id
    )
        const data = await res.json()

        return data

}