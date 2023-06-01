import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useItemProduct } from "../../hooks/useItemProduct";

const ItemDetailContainer =  () => {
    const {itemProduct} = useItemProduct()

    return(
        <ItemDetail product = {itemProduct} />
    )
}
export default ItemDetailContainer