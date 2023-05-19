import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import './Cart.css'

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
                    <div className="cart-item">
                        <img className="item-img" src="/img/camisetas/03.jpg" alt="" />
                        <div className="item-name">
                            <span>Artículo</span>
                            <h3>NOMBRE</h3>
                        </div>
                        <div className="item-quantity">
                            <span>Cantidad</span>
                            <h3>123</h3>
                        </div>
                        <div className="item-price">
                            <span>Precio</span>
                            <h3>$123</h3>
                        </div>
                        <div className="item-subtotal">
                            <span>Subtotal</span>
                            <h3>$123</h3>
                        </div>
                        <button className="btn-remove"><i className="bi bi-trash3-fill"></i></button>
                    </div>

                    <div className="cart-actions">
                        <div className="cart-actions-left">
                            <button className="btn-clear">Vaciar carrito</button>
                        </div>
                        <div className="cart-actions-right">
                            <div className="cart-actions-right-total">
                                <p>Total: </p>
                                <p>$3000</p>
                            </div>
                            <button className="btn-buy">Comprar Ahora</button>
                        </div>
                    </div>
                </div>
            </>
            )
    }


}