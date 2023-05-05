import { useEffect, useState } from "react"
import products from '../../data/productos.json'
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =  () => {

    //Creacion del estado
    const [itemProduct, setItemProduct] = useState([]);

    //Obtencion de paraametro URL

    const {itemID} =useParams()

    //useEffect para usar Promise
    useEffect(() => {

        const itemPromise = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products.find(product => product.id === itemID))
            },2000);
        });

        itemPromise.then(result => setItemProduct(result))
        itemPromise.catch(result => setItemProduct([]))

    }, [itemID]);

    return(
        <>
            <ItemDetail product = {itemProduct} />
        </>
    )
}
export default ItemDetailContainer