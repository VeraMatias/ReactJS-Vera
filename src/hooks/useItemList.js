import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const useItemList = (products) =>{

    //Creacion del estado
    const [itemList, setItemList] = useState([]);

    //Obtencion de Parametros de URL
    const {categoryID} = useParams()

    //useEffect para usar Promise
    useEffect(() => {

        const productList = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                //resolve(products)
                if (!categoryID){
                    resolve(products)
                }else{
                    categoryID === "*" ? resolve(products) : resolve(products.filter(product => product.categoria == categoryID)) 
                }
            },2000);
        });

        productList.then(result => setItemList(result))
        productList.catch(result => setItemList([]))

    }, [categoryID]);

    return {itemList}

}