import Item from "../Item/Item"
import './ItemList.css';


const ItemList = ({itemList}) => {
    return(
        <>
            <div className="container-items">
                {!itemList.length && "SKELETON"}
                {itemList.map(item => (
                    <Item item={item} />
                ))}
            </div>
        </>
    )
}

export default ItemList