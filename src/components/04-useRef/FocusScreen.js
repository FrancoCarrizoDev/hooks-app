import React, {useRef} from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div className="p-5">
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre" />
                <button 
                    className="btn btn-outline-primary mt-4"
                    onClick={handleClick}               
                >
                    Focus
                </button>
        </div>
    )
}
