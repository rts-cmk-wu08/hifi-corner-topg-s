import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import OrangeBtn from "./OrangeBtn"



const Cards = ({search}) => {

    const [cards, setCards] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const location = useLocation()

    console.log(search)

    const baseUrl = 'http://localhost:4000/products'

    const [url, setUrl] = useState (baseUrl)

    useEffect(() => {
        console.log(location.pathname)
        if (search !== undefined){
            setUrl(baseUrl+`?q=${search}`)  
        } if(location.pathname==='/'){
            setUrl(baseUrl+'?_limit=4')
        } else {
            setUrl(baseUrl)
        }
        //axios(`http://localhost:4000/products${location.pathname === "/" ? "?_limit=4" : ""}`)
    }, [search, location]);

    useEffect(() => {
        console.log(url)
        axios(url)
        .then(response => { 
            console.log(response.data)
            return setCards(response.data)})
        .catch(error => setError(error))
        .finally(() => setLoading(false))
        
    }, [url]);


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

