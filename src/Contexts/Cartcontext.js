import {createContext, useState, useEffect} from "react"

export const Cartcontext = createContext()

const Cartprovider = (props) => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setcartItems] = useState([ {
        id: 1,
        name: "classic cd player",
        category: "cd-player",
        count: 1,
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
   

  useEffect(() => {
    setCartCount(cartItems.reduce((accumulator, item) => accumulator+item.count, 0))
    setTotalPrice(cartItems.reduce((accumulator, item) => accumulator+item.count * item.price , 0))
  }, [cartItems]);
  

    return (
        <Cartcontext.Provider value={{cartItems, cartCount, setcartItems, HandleaddtoCart, totalPrice }}>
        {props.children}
        </Cartcontext.Provider>
      );
}
 
export default Cartprovider;