import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { getFirestore, collection, addDoc, getDocs, query, where} from "firebase/firestore"


export const useFirestore = () =>{
    const {cart, totalOrder} = useContext(CartContext)

    const sendOrder = (userInfo) =>{
        const order ={
            buyer: {
                name: userInfo.username,
                phone: userInfo.phone,
                email: userInfo.email
            },
            items: cart.map(product =>{
                return({
                    id: product.item.id,
                    title: product.item.nombre,
                    quantity: product.quantity,
                    price: product.item.precio,
                })
            })
            ,
            date: currentDate(),
            total: totalOrder()
        }
        saveFirestore("orders", order)
    }

    const currentDate =() =>{
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        return(`${day}/${month}/${year}`);
    }
    

    const saveFirestore = (nameCollection, order) =>{
        
        const db = getFirestore()
        const orderCollection = collection(db, nameCollection)

        addDoc(orderCollection, order).then(({id}) => alert(`Su orden fue generada a traves del ID ${id}`))
    }

    const getCollection = (nameCategory, setList,all) =>{
        const db = getFirestore()
        
        if (all){
            const allproducts = collection(db, "items")
            getDocs(allproducts).then((snapshot) =>{
                snapshot === 0 ?
                    setList([])
                :
                    setList(snapshot.docs.map((doc) => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )))
            })
        }else{
            const q = query(
                collection(db, "items"),
                where("categoria", "==", nameCategory)
            )
            getDocs(q).then((snapshot) =>{
                snapshot === 0 ?
                    setList([])
                :
                    setList(snapshot.docs.map((doc) => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )))
            })
        }

    }

    return {sendOrder, getCollection}
} 