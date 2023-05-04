import { useEffect, useState } from "react"
import products from '../../data/productos.json'
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer =  ({productId}) => {

    //Creacion del estado
    const [itemProduct, setItemProduct] = useState([]);

    //useEffect para usar Promise
    useEffect(() => {

        const itemPromise = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products.find(product => product.id === productId))
            },2000);
        });

        itemPromise.then(result => setItemProduct(result))
        itemPromise.catch(result => setItemProduct([]))

    }, []);

    return(
        <>
            <ItemDetail product = {itemProduct} />
        </>
    )
}
export default ItemDetailContainer