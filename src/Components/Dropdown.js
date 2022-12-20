import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {CheckboxContext} from "./Checkbox";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const {savedBrands, setSavedBrands, checked, setChecked, addBrand, removeBrand} = useContext(CheckboxContext)

  useEffect(() => {
//    console.log(savedBrands)
//    console.log(checked)
  }, [savedBrands, checked]);

  const location = useLocation();
  useEffect(() => {
    axios(`http://localhost:4000/brands`)
      .then((response) => setBrands(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const handleOpen = ({childdata}) => {
    setOpen(!open);
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      addBrand(e.target.value)
    } else {
      removeBrand(e.target.value)
    }
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="dropdown">
        <div className="flex" onClick={handleOpen}>
          <h5 className="margin">Brand</h5>
          {open ? <p className="margin">^ </p> : <p className="margin">v </p>}
        </div>
        {open ? (
          <ul>
            {brands.map((brand) => (
              <li className="asideSortby__list" key={brand.id}>
                {brand.name}
                <input type="checkbox" onChange={handleChecked} value={brand.id} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
