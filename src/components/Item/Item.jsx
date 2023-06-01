import './Item.css';

import {Link} from "react-router-dom"

const Item = ({item}) => {
    return(
        <>
            <div className="card-product">
                <img className="product-image" src={item.imagen} alt={item.nombre} />
                <div className="product-details">
                    <div className='details-text'>
                        <h3 className="details-name">{item.nombre}</h3>
                        <p className="details-price"> $ {item.precio}</p>
                    </div>
                </div>
                <Link to={`/item/${item.id}`} >
                    <button className = {"details-more"}>Más Info</button>
                </Link>
            </div>
        </>
    )
}

export default Item;