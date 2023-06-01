import './ItemCount.css';

import { Link } from "react-router-dom"
import { useItemCount } from '../../hooks/useItemCount';

const ItemCount =  ({initial, stock, onAdd}) => {

    const {counter,showButtonBuy,setShowButtonBuy,handlerDecrease,handlerIncrease} = useItemCount({initial,stock})

    return(
        <>
        <div className="container-count">
            <div className="count-controls">
                <button onClick={handlerDecrease} className="controls-btn">-</button>
                <h4 className="controls-number">{counter}</h4>
                <button onClick={handlerIncrease}  className="controls-btn">+</button>
            </div>
            <button className="count-add" onClick={() => {onAdd(counter); setShowButtonBuy(true)}} disabled={!stock || counter===0 || counter > stock}>Agregar al Carrito</button>
        </div>
        <p className="count-stock">Stock disponible: {stock} </p>
        {showButtonBuy && <Link to={"/cart"}><button className="btn-finish">Comprar Ahora</button></Link>}
        </>

    )
}
export default ItemCount