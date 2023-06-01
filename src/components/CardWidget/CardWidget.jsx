import './CardWidget.css';

import cart from './assets/carrito.png'

const CardWidget =  ({counterCart}) => {
    return(
        <div className='container-cart-navbar'>
            <img className='cart-logo' src={cart} alt="logo de carrito de compras" />
            <p>{counterCart}</p>
        </div>
    )
}

export default CardWidget