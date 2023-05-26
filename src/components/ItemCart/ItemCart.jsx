import './ItemCart.css'
import {Link} from "react-router-dom"

export const ItemCart = ({item, quantity, remove, BtnRemove}) =>{

    return(
        <div className="cart-item">
            <Link to={`/item/${item.id}`} >
                <img className="item-img" src={item.imagen} alt={item.nombre} />
            </Link>
            <div className="item-name">
                <span>Artículo</span>
                <h3>{item.nombre}</h3>
            </div>
            <div className="item-quantity">
                <span>Cantidad</span>
                <h3>{quantity}</h3>
            </div>
            <div className="item-price">
                <span>Precio</span>
                <h3>${item.precio}</h3>
            </div>
            <div className="item-subtotal">
                <span>Subtotal</span>
                <h3>${item.precio * quantity}</h3>
            </div>
            {BtnRemove &&
            <button className="btn-remove" onClick={() => remove(item.id)}><i className="bi bi-trash3-fill"></i></button>
            }
        </div>
    )
}