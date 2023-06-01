import { useState } from "react"

export const useItemCount = ({initial,stock}) =>{
    const [counter, setCounter] = useState(initial);
    const [showButtonBuy, setShowButtonBuy] = useState(false)
    
    const handlerDecrease = () => {
        if (counter > 0){ setCounter ( counter - 1);}
    }

    const handlerIncrease = () => {
        if (counter < stock){ setCounter ( counter + 1);}
    }

    return{counter,showButtonBuy,setShowButtonBuy,handlerDecrease,handlerIncrease}
}