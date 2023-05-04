import './Item.css';

const Item = ({item}) => {
    return(
        <>
            <div className="card-product">
                <img className="product-image" src={item.imagen} alt="imagen del producto" />
                <div className="product-details">
                    <div className='details-text'>
                        <h3 className="details-name">{item.nombre}</h3>
                        <p className="details-price"> $ {item.precio}</p>
                    </div>
                </div>
                <button className="details-more btn1">Mas Info</button>
            </div>
        </>
    )
}

export default Item;