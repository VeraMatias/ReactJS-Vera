import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useFirestore } from "./useFirestore";

export const useItemList = (products) =>{

    //Creacion del estado
    const [itemList, setItemList] = useState([]);

    //Obtencion de Parametros de URL
    const {categoryID} = useParams()

    //Obtencion de funcion de firestore
    const {getCollection} = useFirestore() 

    //useEffect para usar Promise
    useEffect(() =>{

        if (categoryID != undefined){
            categoryID === "*"?
            getCollection(categoryID,setItemList,true)
            :
            getCollection(categoryID,setItemList,false)
        }else{
            getCollection(categoryID,setItemList,true)
        }

    },[categoryID])

    return {itemList}

}