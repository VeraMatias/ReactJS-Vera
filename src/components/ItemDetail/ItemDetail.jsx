import ItemCount from '../../components/ItemCount/ItemCount';

const ItemDetail =  ({product}) => {
    return(
        <>
            <div className="container-details">
                <div className="details-product">
                    <h2 className='product-name'>{product.nombre}</h2>
                    <img className="product-image" src={product.imagen} alt="imagen del producto" />
                    <p className='product-description'>{product.descripcion}</p>
                    <p className='product-price'>{product.precio}</p>
                </div>
                <ItemCount  initial={0} stock={product.stock} onAdd={(count) => console.log("Cantidad:",count)}/>
            </div>
        </>
    )
}
export default ItemDetail

