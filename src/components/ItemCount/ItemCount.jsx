import { useState } from "react"

import './ItemCount.css';

const ItemCount =  ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    
    const handlerDecrease = () => {
        if (counter > 0){ setCounter ( counter - 1);}
    }

    const handlerIncrease = () => {
        if (counter < stock){ setCounter ( counter + 1);}
    }

    return(
        <>
        <div className="container-count">
            <div className="count-controls">
                <button onClick={handlerDecrease} className="controls-btn">-</button>
                <h4 className="controls-number">{counter}</h4>
                <button onClick={handlerIncrease}  className="controls-btn">+</button>
            </div>
            <button className="count-add" onClick={() => onAdd(counter)} disabled={!stock || counter===0}>Agregar al Carrito</button>
            
        </div>
        <p className="count-stock">Stock disponible: {stock} </p>
        </>

    )
}
export default ItemCount