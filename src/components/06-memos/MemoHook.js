import React, { useMemo, useState } from 'react'
import { processSlow } from '../../helpers/processSlow'
import {useCounter} from '../../hooks/useCounter'
export const MemoHook = () => {

    const {counter, increment} = useCounter(5000)
    const [show, setShow] = useState(true)

    const memoProcess = useMemo(() => processSlow(counter), [counter])

    return (
        <div className="p-5">
            <h1>MemoHook</h1>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <p>{memoProcess}</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

/*
    En este caso tenemos un componente padre, el cual en su cuerpo del jsx, ejecuta una función x (de tamaño o proceso n), la cual
    es re-ejecutada, cada vez que el componente detecta un cambio en sus estados (en este caso cada vez que tocamos en el btn +1). 
    Esto genera mucho consumo de recursos y no debería pasar, a no ser que esa función modifique algún estado interno del componente padre.

    Creando una constante, aplicando el useMemo sobre dicha función pesada, lo que hacemos es decir, ejecuta esta función pesada, sólamente
    si algún estado interno del padre, ha cambiado(esto se configura en el array de dependencias del hook), si no, no vuelvas a ejectuar dicho función pesda.
*/
