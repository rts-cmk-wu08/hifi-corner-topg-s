import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import OrangeBtn from "./OrangeBtn";
import Stock from "./Stock";
import {CheckboxContext} from "./Checkbox";

const Cards = ({ compare, stock }) => {

    const {savedBrands} = useContext(CheckboxContext)
    console.log(savedBrands);
    
    

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
        {cards.filter(card => card.brandId == savedBrands).map(filteredCard => (
          <article key={filteredCard.id}>
          {compare && <p className="compare">Compare</p>}
          <Link to={`/product/${filteredCard.id}`}>
            <img src={filteredCard.imageUrl} alt="" />
          </Link>
          <p>{filteredCard.name}</p>
          <p>{filteredCard.category}</p>
          <p>£ {filteredCard.price}</p>
          <div className="containerInStock">
            <Link to={`/product/${filteredCard.id}`}>
              {location.pathname === "/" ? (
                <OrangeBtn text="Read more" />
              ) : (
                <OrangeBtn text="Add to cart" />
              )}
            </Link>
            {stock && (
              <>
                <Stock stockStatus={filteredCard.inStock} />
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
