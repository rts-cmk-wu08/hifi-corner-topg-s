import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [brands, setBrands] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const location = useLocation()
    useEffect(() => {
        axios(`http://localhost:4000/brands`)
        .then(response => setBrands(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
        
    }, []);

    const handleOpen = () => {
        setOpen(!open);
    };

    return loading ? (<p>Loading...</p>) : ( 
    
        <>
               
        <div className="dropdown">
            <div className="flex" onClick={handleOpen}>
            <h5 className="margin">Brand</h5>
            {open ? <p className="margin">^ </p> : <p className="margin">v </p>}
            </div>
            {open ? (
                <ul>
                     {brands.map(brand => (
                <li className="asideSortby__list">
                  {brand.name} <input type="checkbox" />
                </li>
        ))}
              </ul>
            ) : null}
        </div>
         </>
    );
};

export default Dropdown;