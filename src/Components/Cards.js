import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import OrangeBtn from "./OrangeBtn";
import Stock from "./Stock";

const Cards = ({ compare, stock }) => {
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const location = useLocation();
  useEffect(() => {
    axios(
      `http://localhost:4000/products${
        location.pathname === "/" ? "?_limit=4" : ""
      }`
    )
      .then((response) => setCards(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {cards.map((card) => (
        <article key={card.id}>
          {compare && <p className="compare">Compare</p>}
          <Link to={`/product/${card.id}`}>
            <img src={card.imageUrl} alt="" />
          </Link>
          <p>{card.name}</p>
          <p>{card.category}</p>
          <p>£ {card.price}</p>
          <div className="containerInStock">
            <Link to={`/product/${card.id}`}>
              {location.pathname === "/" ? (
                <OrangeBtn text="Read more" />
              ) : (
                <OrangeBtn text="Add to cart" />
              )}
            </Link>
            {stock && (
              <>
                <Stock stockStatus={card.inStock} />
                <p>In Stock</p>
              </>
            )}
          </div>
        </article>
      ))}
    </>
  );
};

export default Cards;
