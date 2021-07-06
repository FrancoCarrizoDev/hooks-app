import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
export const Memorize = () => {

    const [show, setShow] = useState(true)

    const { counter, increment } = useCounter(10)
    return (
        <div className="p-5">
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
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
El React.Memo sirve para cuando tenemos un componente padre, el cual es afectado por el cambio de algún estado interno, 
lo que hace re-renderizar nuevamente ese componente, pero tenemos el problema de que un componente hijo no necesariamente
debería re-renderizarse si sigue exactamente igual (sus estados internos no cambiaron en absoluto) a pesar de haber cambios en su componente padre.

Aplicando el React.memo en el componente hijo, el cual no cambio sus estados en abosluto, ponemos en memoria ese componente para que a no ser que cambien 
sus propos , no será re-renderizado.

*/