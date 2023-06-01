import './ItemList.css';

import Item from "../Item/Item"
import ItemLoading from "../Loading/ItemLoading";

const ItemList = ({itemList}) => {
    return(
        <div className="container-items">
            {!itemList.length && <ItemLoading quantity ={8}/>}
            {itemList.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemList