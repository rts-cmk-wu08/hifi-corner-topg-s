import CardsProducts from "../Components/CardsProducts";
import "./Products.css";
import Dropdown from "../Components/Dropdown";
import { useEffect, useState } from "react";


const Products = () => {

  return (
    <>
      <h1>PRODUCTS</h1>
      <div className="products__divContainer">
        <aside className="asideSortby">
          <h4>Sort by</h4>
          <Dropdown />
          <h5 className="asideSortby__listH5">Color</h5>
          <ul>
            <li className="asideSortby__list">
              Steelseries <input type="checkbox" />
            </li>
            <li className="asideSortby__list">
              Logiteck <input type="checkbox" />
            </li>
            <li className="asideSortby__list">
              Apple <input type="checkbox" />
            </li>
          </ul>
          <Dropdown />
        </aside>
        <section className="productsSection__Cards">
          <CardsProducts compare={true} stock={true} />
        </section>
      </div>
    </>
  );
};

export default Products;
