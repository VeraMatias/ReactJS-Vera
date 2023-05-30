import { useCheckout } from '../../hooks/useCheckout'
import './CheckoutInfoUser.css'

export const CheckoutInfoUser = () =>{

    const {handleChange, handleSubmit, inputValues,isEmailOk} = useCheckout()

    return(
        <div className="container-checkout-user">
        <h2>Información del Usuario</h2>
        <form onSubmit={handleSubmit}>
            {inputValues.map(input =>{
                return(                        
                    <div className="checkout-form field" key={input.name}>
                    <input 
                    type={input.type} 
                    className="form-field" 
                    placeholder={input.placeholder}
                    name={input.name} 
                    id={input.id}
                    value={input.value}
                    onChange={handleChange}
                    required />
                    <label htmlFor={input.htmlFor} className="form-label">{input.text}</label>
                    </div>)
                })}
            {   isEmailOk()?
                <button className='checkout-btn-buy' type="submit">Confirmar compra</button>
                :
                <>
                    <button className='checkout-btn-buy' disabled type="submit">Confirmar compra</button>
                    <p className='text-error'>Los emails no coinciden</p>
                </>
            }
        </form>
    </div>
    )
}