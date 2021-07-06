import React, { useRef, useLayoutEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './index.css'
export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect())
        return () => {

        };
    }, [quote])

    return (
        <div className="p-5">
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>
            <button className="btn btn-primary" onClick={increment}>Siguiente frase</button>
        </div>
    )
}
