import {createContext, useState} from "react"

export const Cartcontext = createContext()

const Cartprovider = (props) => {
    const [cartItems, setcartItems] = useState([ {
        id: 1,
        name: "classic cd player",
        category: "cd-player",
        count: 3,
        price: 4000,
        imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_classic_cd.jpg"},
        {
            id: 1,
            name: "Creek Destiny cd player",
            category: "cd-player",
            count: 2,
            price: 4000,
            imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_Destiny_CD.jpg"}
    ]);
    const HandleaddtoCart = (newItem) =>{
        let newCart = [...cartItems, newItem]
        setcartItems(newCart)
    }
    let myCartCount = cartItems.reduce(
  (accumulator, item) => 
 accumulator+item.count
  , 0
)
    return (
        <Cartcontext.Provider value={{cartItems, setcartItems, HandleaddtoCart }}>
        {props.children}
        </Cartcontext.Provider>
      );
}
 
export default Cartprovider;