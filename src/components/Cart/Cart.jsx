import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import './Cart.css'
import { ItemCart } from "../ItemCart/ItemCart"
import { ActionsCart } from "../ActionsCart/ActionsCart"
import { Link } from "react-router-dom"

export const Cart = () =>{
    const {cart, totalOrder, removeItem, clearCart} = useContext(CartContext)

    if (!cart.length){
        return(   
            <>
                <div className="container-no-product">
                    <h2 className="title">¡Tu carrito esta vacio!</h2>
                    <Link to={"/category/*"} className={"btn-products"}>Comprar Ahora </Link>
                </div>
            </>        

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