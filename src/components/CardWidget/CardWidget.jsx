import carrito from './assets/carrito.png'
import './CardWidget.css';

const CardWidget =  ({contador}) => {
    return(
        <div className='contenedor-carrito'>
            <img className='logo-carrito' src={carrito} alt="logo de carrito de compras" />
            <p>{contador}</p>
        </div>
    )
}

export default CardWidget