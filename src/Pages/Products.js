import Cards from "../Components/Cards";
import "./Products.css";
import Dropdown from "./Dropdown";

const Products = () => {
  return (
    <>
      <h1>PRODUCTS</h1>
      <div className="products__divContainer">
        <aside className="asideSortby">
          <h4>Sort by</h4>
          <h5 className="asideSortby__listH5">Brand</h5>
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
          <Dropdown />
        </aside>
        <section className="productsSection__Cards">
          <Cards compare={true} stock={true} />
        </section>
      </div>
    </>
  );
};

export default Products;
