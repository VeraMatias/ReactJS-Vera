import './ItemDetail.css';

import ItemCount from '../../components/ItemCount/ItemCount';

const ItemDetail =  ({product}) => {
    return(
        <>
            <h2 className='product-name'>{product.nombre}</h2>
            <div className="container-details">
                <div className="details-product-left">
                    <img className="product-image" src={product.imagen} alt="imagen del producto" />
                </div>
                <div className="details-product-right">
                    <div className='container-description'>
                        <p className='description-title'>Descripción del Producto</p>
                        <p className='product-description'>{product.descripcion}</p>
                        <p className='product-price'>Precio: ${product.precio}</p>
                    </div>
                    <p className='count-title'>Agregar al carrito</p>
                    <ItemCount  initial={0} stock={product.stock} onAdd={(count) => console.log("Cantidad:",count)}/>
                </div>
            </div>
        </>
    )
}
export default ItemDetail

