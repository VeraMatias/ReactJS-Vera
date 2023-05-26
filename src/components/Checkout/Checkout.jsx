
import { CheckoutInfoUser } from '../CheckoutInfoUser/CheckoutInfoUser'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCart } from "../ItemCart/ItemCart"

import './Checkout.css'

export const Checkout = () => {

    const {cart, removeItem} = useContext(CartContext)
    return(
        <>
            <div className="container-checkout">
                <CheckoutInfoUser/>
                <div className="container-checkout-list">
                    <h2>Detalle de tu compra</h2>
                    <div className="list-detail">
                    {
                        cart.map(product => (
                            <ItemCart key={product.item.id} item ={product.item} quantity={product.quantity} BtnRemove = {false} remove={(itemID) => removeItem(itemID) }/>
                        ))
                    }
                    </div>

                </div>
            </div>
        </>
    )
}