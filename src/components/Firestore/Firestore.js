import { getFirestore, getDoc, doc} from "firebase/firestore"
import { useEffect } from "react"

useEffect ( () =>{
    const db = getFirestore()
    const refDoc = doc(db, "items", "cOCHgRSqhI5hLCN1cAfo")

    getDoc(refDoc).then(snapshot => {
        console.log({id: snapshot.id, data: snapshot.data()})
    })
},[])