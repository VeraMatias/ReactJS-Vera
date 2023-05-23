import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import './Cart.css'
import { ItemCart } from "../ItemCart/ItemCart"
import { ActionsCart } from "../ActionsCart/ActionsCart"

export const Cart = () =>{
    const {cart, totalOrder, removeItem, clearCart} = useContext(CartContext)

    if (!cart.length){
        return(           
            <h1>ESTE ES EL COMPONENTE CART VACIO</h1>
        )
    }else{
        return(
            <>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>

                <h2 className="title">Carrito de Compra</h2>
                <div className="conteiner-cart">
                    {
                        cart.map(product => (
                            <ItemCart key={product.item.id} item ={product.item} quantity={product.quantity} remove={(itemID) => removeItem(itemID)}/>
                        ))
                    }
                    <ActionsCart total = {totalOrder()} clear = {() => clearCart()}/>
                </div>
            </>
            )
    }
}