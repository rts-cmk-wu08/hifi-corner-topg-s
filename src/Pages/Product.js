import { useLoaderData } from "react-router-dom"
import Slider from "../Components/Slider";
import './product.css'

const Product = () => {
    const card = useLoaderData()

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
        <h4>$ {card.price}</h4>
        </div>

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