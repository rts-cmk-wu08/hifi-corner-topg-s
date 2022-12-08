import {createContext, useState} from "react"

export const Cartcontext = createContext()

const Cartprovider = ({props}) => {
    const [addtocart, setAddtocart] = useState(0);

    return (
        <Cartcontext.Provider value={{
            addtocart,
             setAddtocart
        }}>
        {props.children}
        </Cartcontext.Provider>
      );
}
 
export default Cartprovider;