import React, { useState, useCallback } from 'react'
import {ShowIncrement} from './ShowIncrement'
export const CallBackHook = () => {


    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)
        },
        [setCounter]
    )

    return (
        <div className="p-5">
            <h1>UseCallbackHook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}


/*
En este caso tenemos un componente padre, que muestra un contador, llamamos a un componente hijo el cual le enviamos por props
la función que va a aumentar en uno el valor del counter del padre mediante un botón. 

El problema aquí, es que el componente hijo, sólamente ejecuta una función de su papá y cambia los estados de su papá,
pero ningún cambio interno en sus estados sucede, de igual manera el hijo se vuelve a renderizar y no debería pasar. 

Lo qye hacemos para que eso no suceda es, hacerle un ReactMemo a su hijo que sólamente ejecuta la función incrementar
y dentro del componente padre creamos uan constante con el nombre incrementar y le aplicamos el hook creando en su cuerpo
las acciones que dicha función debe realizar.

Tenemos la posibilidad de mandarle y recibir parámetros.

*/ 