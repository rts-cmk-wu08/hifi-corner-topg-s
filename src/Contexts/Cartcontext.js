import {createContext, useState, useEffect} from "react"

export const Cartcontext = createContext()

const Cartprovider = (props) => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setcartItems] = useState( JSON.parse(localStorage.getItem("shoppingCart")) || [ {
        id: 1,
        name: "classic cd player",
        category: "cd-player",
        count: 1,
        price: 4000,
        imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_classic_cd.jpg"},
        {
            id: 2,
            name: "Creek Destiny cd player",
            category: "cd-player",
            count: 8,
            price: 4000,
            imageUrl: "https://topgbilleder.netlify.app/img/cd_afspillere/creek_Destiny_CD.jpg"}
    ]);
   
    const HandleaddtoCart = (newItem) =>{
        let newCart = [...cartItems, newItem]
        setcartItems(newCart)
        localStorage.setItem("shoppingCart", JSON.stringify(newCart))
    }
    const handleRemoveFromCart = (id) =>{
      console.log("this has been removed")
      let cartarray = [...cartItems]
        let updatedCart = cartarray.filter(item => item.id !== id)
      setcartItems(updatedCart)
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart))

    }
    const handleIncrease = (id) =>{
      let updatedCart = cartItems.map(item =>{ 
        if (item.id === id) item.count = item.count + 1 
        return item
      })
    setcartItems(updatedCart)

    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart))
    }
    const handleDecrease = (id) =>{
      let updatedCart = cartItems.map(item =>{ 
        if (item.id === id && item.count>1 ) item.count = item.count - 1 
        return item
      })
    setcartItems(updatedCart)
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart))
    }

  useEffect(() => {
    setCartCount(cartItems.reduce((accumulator, item) => accumulator+item.count, 0))
    setTotalPrice(cartItems.reduce((accumulator, item) => accumulator+item.count * item.price , 0))
  }, [cartItems]);
  

    return (
        <Cartcontext.Provider value={{cartItems, cartCount, setcartItems, HandleaddtoCart,handleRemoveFromCart,handleDecrease,handleIncrease, totalPrice }}>
        {props.children}
        </Cartcontext.Provider>
      );
}
 
export default Cartprovider;