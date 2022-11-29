import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrangeBtn from "./OrangeBtn"



const Cards = () => {

    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        axios("http://localhost:4000/products")
        .then(response => setCards(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
        
    }, []);

    
    return loading ? (<p>Loading...</p>) : ( 
        <>
            <h1>dette er products siden</h1>

            {cards.map(card => (
                <section key={card.id}>
                    <img src={card.imageUrl} alt="" />
                    <Link to={`/product/${card.id}`}><h1>{card.name}</h1></Link>
                    <p>$ {card.price}</p>
                    <div>
                    <OrangeBtn text="Read more"/>
                    <p>stock text</p>
                    </div>
                </section>
            ))}
        </>
     );
    }
    

 
export default Cards;