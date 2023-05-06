import './ItemDetail.css';

import ItemCount from '../../components/ItemCount/ItemCount';
import Skeleton from 'react-loading-skeleton';

const ItemDetail =  ({product}) => {
    return(
        <>
            <h2 className='product-name'>{product.nombre || <Skeleton/>}</h2>
            <div className="container-details">
                {!product.imagen ? <Skeleton height={500} width={700}/> : <img className="product-image" src={product.imagen} alt="imagen del producto" />}
                <div className="details-product-right">
                    <div className='container-description'>
                        <p className='description-title'>Descripción del Producto</p>
                        <p className='product-description'>{product.descripcion || <Skeleton count={5}/>}</p>
                        {!product.precio ? <Skeleton /> : <p className='product-price'>Precio: ${product.precio}</p> }
                    </div>
                    <p className='count-title'>Agregar al carrito</p>
                    {!product.stock ? <Skeleton/> : <ItemCount  initial={0} stock={product.stock} onAdd={(count) => console.log("Cantidad:",count)}/>}
                </div>
            </div>
        </>
    )
}
export default ItemDetail

