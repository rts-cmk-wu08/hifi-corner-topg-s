import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



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
                <article key={card.id}>
                    <Link to={`/prodicts/${card.id}`}><h1>{card.name}</h1></Link>
                </article>
            ))}
        </>
     );
    }
    

 
export default Cards;