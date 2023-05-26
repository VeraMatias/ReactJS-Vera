import cart from './assets/carrito.png'
import './CardWidget.css';

const CardWidget =  ({counterCart}) => {
    return(
        <div className='container-cart-navbar'>
            <img className='cart-logo' src={cart} alt="logo de carrito de compras" />
            <p>{counterCart}</p>
        </div>
    )
}

export default CardWidget