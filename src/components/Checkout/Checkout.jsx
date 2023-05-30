
import { CheckoutInfoUser } from '../CheckoutInfoUser/CheckoutInfoUser'
import { useContext} from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCart } from "../ItemCart/ItemCart"

import './Checkout.css'

export const Checkout = () => {
    const {cart, removeItem, orderID, orderPurchased} = useContext(CartContext)

    return(
        <>  
        {
            orderPurchased?
            <div className='container-order'>
                <h2>Gracias por su compra, su numero de orden es:</h2>
                <h2 className = 'order-id'> {orderID} </h2>
            </div>
            :
            <div className="container-checkout">
                <CheckoutInfoUser />
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
        }
        </>
    )
}