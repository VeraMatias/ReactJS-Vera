import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {item,quantity}])
        }else{
            const quantityPrev = cart.find(itemPrev => itemPrev.item.id === item.id).quantity
            if (item.stock >= (quantityPrev + quantity)){
                removeItem(item.id)
                quantity += quantityPrev
                setCart(prev => [...prev, {item,quantity}])
            }else{
                alert(`La cantidad sobrepasa el stock actual. Solo puede agregar ${item.stock - quantityPrev} unidades más.`)
            }
        }
        console.log("Cantidad",quantityCArt())
    }

    const removeItem = (itemID) =>{
        const newCart = cart.filter(itemFilter => itemFilter.item.id !== itemID)
        setCart(newCart)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart =(itemID) =>{
        return cart.some(itemSome => itemSome.item.id === itemID)
    }

    const quantityCArt = () =>{
        let quantityTotal = 0
        cart.forEach(item => quantityTotal += item.quantity)
        return (quantityTotal)
    }

    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}