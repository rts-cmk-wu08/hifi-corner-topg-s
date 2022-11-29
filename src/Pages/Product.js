import { useLoaderData } from "react-router-dom"

const Product = () => {
    const card = useLoaderData()

    return (
    <article>
        <img src={card.imageUrl} alt="" />
        <h1>{card.name}</h1>
        <h2>$ {card.price}</h2>
        <h3>{card.category}</h3>
    </article>
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