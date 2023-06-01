import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc} from "firebase/firestore"

export const useFirestore = () =>{
    const {cart, totalOrder, setOrderID, setOrderPurchased, clearCart} = useContext(CartContext)

    const sendOrder = (userInfo,setOrderID,setOrderPurchased) =>{
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
        saveFirestore("orders", order,setOrderID,setOrderPurchased)
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

        addDoc(orderCollection, order).then(({id}) => {
            setOrderID(id)
            clearCart()
            setOrderPurchased(true)
        })
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

    const getDocument = (productID, setItemProduct,setProductExist) =>{
        const db = getFirestore()
        const q = doc(db,"items",productID)
        getDoc(q).then((snapshot) =>{
            if(snapshot.data()?.nombre === undefined){      
                setItemProduct([])
                setProductExist(false)
            }else{
                setItemProduct({id: snapshot.id, ...snapshot.data()})
                setProductExist(true)
            }
        })
    }

    return {sendOrder, getCollection, getDocument}
} 