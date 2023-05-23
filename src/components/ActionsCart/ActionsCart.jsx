import './ActionsCart.css'

export const ActionsCart = ({total, clear}) =>{
    return(
        <div className="cart-actions">
        <div className="cart-actions-left">
            <button className="btn-clear" onClick={() => clear()}>Vaciar carrito</button>
        </div>
        <div className="cart-actions-right">
            <div className="cart-actions-right-total">
                <p>Total: </p>
                <p>${total}</p>
            </div>
            <button className="btn-buy">Comprar Ahora</button>
        </div>
    </div>
    )
}