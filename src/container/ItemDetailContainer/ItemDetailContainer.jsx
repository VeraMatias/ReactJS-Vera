import products from '../../data/productos.json'
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useItemProduct } from "../../hooks/useItemProduct";

const ItemDetailContainer =  () => {

    const {itemProduct} = useItemProduct(products)

    return(
        <ItemDetail product = {itemProduct} />
    )
}
export default ItemDetailContainer