import { useEffect, useState } from "react";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <div className="flex" onClick={handleOpen}>
            <h5 className="margin">Color</h5>
            {open ? <p className="margin">^ </p> : <p className="margin">v </p>}
            </div>
            {open ? (
                <ul>
                <li className="asideSortby__list">
                  White <input type="checkbox" />
                </li>
                <li className="asideSortby__list">
                  Black <input type="checkbox" />
                </li>
                <li className="asideSortby__list">
                  Grey <input type="checkbox" />
                </li>
              </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;