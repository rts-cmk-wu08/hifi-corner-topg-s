import {createContext, useState, useEffect} from "react"

export const Cartcontext = createContext()

const Cartprovider = (props) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setcartItems] = useState([ {
        id: 1,
        name: "classic cd player",
        category: "cd-player",
        count: 37,
        price: 4000,
        imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_classic_cd.jpg"},
        {
            id: 1,
            name: "Creek Destiny cd player",
            category: "cd-player",
            count: 8,
            price: 4000,
            imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_Destiny_CD.jpg"}
    ]);
    const HandleaddtoCart = (newItem) =>{
        let newCart = [...cartItems, newItem]
        setcartItems(newCart)
    }
    let CartCount = cartItems.reduce(
  (accumulator, item) => accumulator+item.count , 0)

  useEffect(() => {
    setCartCount(cartItems.reduce((accumulator, item) => accumulator+item.count, 0))
  }, [cartItems]);
  

    return (
        <Cartcontext.Provider value={{cartItems, cartCount, setcartItems, HandleaddtoCart }}>
        {props.children}
        </Cartcontext.Provider>
      );
}
 
export default Cartprovider;