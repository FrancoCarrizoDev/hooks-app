import React, {useState, useEffect} from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect(() => {
        console.log('Hey')
    },[])

    useEffect(() => {
        console.log('Form State cambió')
    },[formState])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Message/>}
        </>
    )
}
