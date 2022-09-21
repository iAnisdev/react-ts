import { useState , useMemo } from "react";

export default function SlowBlock() {

    const [number, setNumber] = useState(() => {
        return 0
    })

    let doubeNumber = useMemo(() => {
        return slowFunctionDouble(number)
    }, [number])

    const [theme, setTheme] = useState(() => {
        return 'dark'
    })

    let themeStyle = useMemo(() => {
        return {
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
            padding: '5vw 2vh',
            border: '1px solid grey',
            marginTop: '2vh',
            fontWeight: 'bold'
        }
    } , [theme])


    function toggleTheme(){
        if(theme === 'dark') setTheme('white')
        else setTheme('dark')

    }

    return (
        <div style={{ padding: '5vw 2vh' }}>
            <input type="number" name="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
            <br />
            <button onClick={toggleTheme}>Change Theme</button>
            <div style={themeStyle}>
                <h3>{doubeNumber}</h3>
            </div>
        </div>
    )
    function slowFunctionDouble(num: number): number {
        for (var i = 0; i <= 1000000000; i++) { }
        return num * 2
    }



}