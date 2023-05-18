import { createContext} from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const methodsCart = useCart()
    return(
        <CartContext.Provider value = {methodsCart}>
            {children}
        </CartContext.Provider>
    )
}