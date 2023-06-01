import { useState } from "react"

export const useCart = () =>{
    const [cart, setCart] = useState([])
    const [orderID,setOrderID] = useState("")
    const [orderPurchased, setOrderPurchased] = useState(false)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {item,quantity}])
        }else{
            const quantityPrev = cart.find(itemPrev => itemPrev.item.id === item.id).quantity
            removeItem(item.id)
            quantity += quantityPrev
            setCart(prev => [...prev, {item,quantity}])
        }
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

    const quantityCart = () =>{
        let quantityTotal = 0
        cart.forEach(item => quantityTotal += item.quantity)
        return (quantityTotal)
    }

    const totalOrder = () =>{
        let totalOrder = 0
        cart.forEach(item => totalOrder += item.quantity * item.item.precio)
        return (totalOrder)
    }

    return {cart, addItem, removeItem, clearCart, quantityCart, totalOrder,orderID,setOrderID, orderPurchased, setOrderPurchased}
}