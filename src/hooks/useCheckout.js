import { useState } from 'react'

export const useCheckout = () =>{

    const [inputs, setInputs] = useState({
        username: "",
        phone: "",
        email: "",
    })

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(inputs)
    }

    const inputValues = [
        {type: "input", placeholder: "Nombre", name: "username", id: "username", value: inputs.username, htmlFor: "username", text: "Nombre"},
        {type: "number", placeholder: "Telefono", name: "phone", id: "phone", value: inputs.phone, htmlFor: "phone", text: "Telefono"},
        {type: "email", placeholder: "Email", name: "email", id: "email", value: inputs.email, htmlFor: "email", text: "Email"}
    ]

    return {handleChange, handleSubmit, inputValues}
}