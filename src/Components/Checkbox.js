import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CheckboxContext = createContext();

const CheckboxProvider = ( props ) => {

  const [savedBrands, setSavedBrands] = useState([]);

  let [checked, setChecked] = useState(false);

  const addBrand = (newBrand) => {
    let updatedBrands = [...savedBrands]
    updatedBrands.push(newBrand)
    setSavedBrands(updatedBrands)
  };

  const removeBrand = (removeBrand) => {
    let updatedBrands = savedBrands.filter(saveBrand => saveBrand !== removeBrand) 
    setSavedBrands(updatedBrands)
  }

  
  return (
    <CheckboxContext.Provider value={{ savedBrands, setSavedBrands, checked, setChecked, addBrand, removeBrand }}>
      {props.children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxProvider;
