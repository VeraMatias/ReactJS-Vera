import ItemList from "../../components/ItemList/ItemList";
import { useItemList } from "../../hooks/useItemList";

const ItemListContainer =  ({greeting}) => {

    const {itemList} = useItemList()

    return(
        <>
            <div style={{textAlign: "center", marginTop: "1rem", marginBottom: "1rem"}}>
                <p>{greeting}</p>
            </div>
            <ItemList itemList ={itemList}/>
        </>
    )
}
export default ItemListContainer