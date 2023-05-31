
export const useItemDetail = () =>{
    const availableStock = (product,cart) =>{
    let qtyProductInCart = cart.find(item => item.item.id === product.id)?.quantity
    if (qtyProductInCart === undefined) qtyProductInCart = 0
    const availableStock = product.stock - qtyProductInCart
    
    return availableStock
    }
    
return{availableStock}
}