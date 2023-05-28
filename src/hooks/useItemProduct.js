import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useFirestore } from "./useFirestore";

export const useItemProduct = (products) =>{

    //Creacion del estado
    const [itemProduct, setItemProduct] = useState([]);

    //Obtencion de paraametro URL
    const {itemID} =useParams()

    //Obtencion de funcion de firestore
    const {getDocument} = useFirestore()

    useEffect(() => {
        getDocument(itemID, setItemProduct)
    }, [itemID]);

    return {itemProduct}
}