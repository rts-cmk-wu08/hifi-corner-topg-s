import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import OrangeBtn from "./OrangeBtn"



const Cards = () => {

    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const location = useLocation()
    useEffect(() => {
        axios(`http://localhost:4000/products${location.pathname === "/" ? "?_limit=4" : ""}`)
        .then(response => setCards(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
        
    }, []);

        return loading ? (<p>Loading...</p>) : ( 

            <>
                {cards.map(card => (
                    <article key={card.id}>
                         <Link to={`/product/${card.id}`}><img src={card.imageUrl} alt="" /></Link>
                        <p>{card.name}</p>
                        <p>{card.category}</p>
                        <p>£ {card.price}</p>
                        <div>
                        <Link to={`/product/${card.id}`}><OrangeBtn text="Read more"/></Link>
                        </div>
                    </article>
                ))}
            </>
         );
 }
    

 
export default Cards;

