import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { getFirestore, collection, addDoc} from "firebase/firestore"


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

    return {sendOrder}
} 