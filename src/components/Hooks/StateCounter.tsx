import { useState } from "react";

export function StateCounter() {
    const [counter, setCounter] = useState(() => {
        return 0
    })

    function decrement() {

        setCounter((prevCounter) => {
            return prevCounter - 1
        })

    }

    function increment() {

        setCounter((prevCounter) => {
            return prevCounter + 1
        })

    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <button disabled>{counter}</button>
            <button onClick={increment}>+</button>
        </>
    )
}