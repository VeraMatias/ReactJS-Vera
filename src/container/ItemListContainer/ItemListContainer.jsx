import { useEffect, useState } from "react"
import products from '../../data/productos.json'
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer =  ({greeting}) => {

    //Creacion del estado
    const [itemList, setItemList] = useState([]);

    //Obtencion de Parametros de URL
    const {categoryID} = useParams()
    console.log(categoryID)
    //useEffect para usar Promise
    useEffect(() => {

        const productList = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                //resolve(products)
                categoryID === "*" ? resolve(products) : resolve(products.filter(product => product.categoria == categoryID))  
            },2000);
        });

        productList.then(result => setItemList(result))
        productList.catch(result => setItemList([]))

    }, [categoryID]);

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