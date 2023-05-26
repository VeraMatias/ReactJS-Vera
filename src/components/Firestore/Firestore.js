import { getFirestore, getDoc, doc, collection, addDoc} from "firebase/firestore"
import { useEffect } from "react"

import products from '../../data/productos.json'

useEffect ( () =>{
    const db = getFirestore()
    const refDoc = doc(db, "items", "cOCHgRSqhI5hLCN1cAfo")

    getDoc(refDoc).then(snapshot => {
        console.log({id: snapshot.id, data: snapshot.data()})
    })
},[])

const sendProduct = () =>{
    const db = getFirestore()

    const productCollections = collection(db, "items")
    products.forEach(product => {
        addDoc(productCollections, product).then(console.log("Cargado",product.id))
    })
}

export const Firebase = () => {
    return sendProduct}