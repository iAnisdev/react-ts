import React ,{ useState , useEffect, useRef} from "react";

export function RendingCount() {
    const [name, setName] = useState(() => {
        return ''
    })

    const renderCount = useRef(0)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('rendering again')
        renderCount.current = renderCount.current +  1
    })

    function focus(){
        if(inputRef.current) inputRef.current.focus()
    }
    

    return (
        <>
            <div style={{padding: '5vw 5vh'}}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  ref={inputRef}/>
                <p>Entered Name is {name}</p>
                <br />
                <button onClick={focus}>Focus</button>
                <p>Rendered {renderCount.current} times</p>
            </div>
        </>
    )

}