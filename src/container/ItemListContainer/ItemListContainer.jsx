import { useEffect, useState } from "react"
import products from '../../data/productos.json'
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer =  ({greeting}) => {

    //Creacion del estado
    const [itemList, setItemList] = useState([]);

    //useEffect para usar Promise
    useEffect(() => {

        const productList = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products)
            },2000);
        });

        productList.then(result => setItemList(result))
        productList.catch(result => setItemList([]))

    }, []);

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