import CardsProducts from "../Components/CardsProducts";
import Cards from "../Components/Cards";
import { CheckboxContext } from "./Checkbox";
import { useContext } from "react";

const CardsContainer = () => {
  const { savedBrands } = useContext(CheckboxContext);
  //console.log(savedBrands);

  const noBrands1 = savedBrands - 1;
  //console.log(noBrands1);

  const noBrands = -1;
  //console.log(noBrands);

  return <>{noBrands1 == noBrands && <Cards compare={true} stock={true} />}</>;
};

export default CardsContainer;
