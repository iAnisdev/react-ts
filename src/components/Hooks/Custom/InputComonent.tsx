import React from 'react'
import useLocalStorage from './useLocalStorage'
import useLogger from './useLogger'

function InputComponent() {
    const [name, setName] = useLocalStorage('name', '')
    useLogger(name)
    return (
        <div>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
    )
}

export default InputComponent