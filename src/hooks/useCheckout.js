import { useState } from 'react'
import { useFirestore } from './useFirestore';

export const useCheckout = () =>{
    const {sendOrder}  = useFirestore()

    const [inputs, setInputs] = useState({
        username: "",
        phone: "",
        email: "",
        email2: ""
    })

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        sendOrder(inputs)
    }

    const isEmailOk = () =>{
        if(inputs.email === inputs.email2) {return true} else {return false}
    }

    const inputValues = [
        {type: "input", placeholder: "Nombre", name: "username", id: "username", value: inputs.username, htmlFor: "username", text: "Nombre"},
        {type: "number", placeholder: "Telefono", name: "phone", id: "phone", value: inputs.phone, htmlFor: "phone", text: "Telefono"},
        {type: "email", placeholder: "Email", name: "email", id: "email", value: inputs.email, htmlFor: "email", text: "Email"},
        {type: "email", placeholder: "Email", name: "email2", id: "email2", value: inputs.email2, htmlFor: "email2", text: "Repita su Email"}
    ]

    return {handleChange, handleSubmit, inputValues,isEmailOk}
}