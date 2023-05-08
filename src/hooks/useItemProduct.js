import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const useItemProduct = (products) =>{

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

    return {itemProduct}
}