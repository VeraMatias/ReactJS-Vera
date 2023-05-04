

const ItemDetail =  ({product}) => {
    return(
        <>
            <h1>{product.id}</h1>
            <h1>{product.nombre}</h1>
            <h1>{product.imagen}</h1>
            <h1>{product.descripcion}</h1>
            <h1>{product.categoria}</h1>
            <h1>{product.precio}</h1>
            <h1>{product.stock}</h1>
        </>
    )
}
export default ItemDetail

