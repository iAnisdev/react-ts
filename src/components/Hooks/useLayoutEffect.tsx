import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function ShowPopup() {

    const [show, setShow] = useState(() => {
        return false
    })

    let button = useRef<HTMLButtonElement>(null)
    let popup = useRef<HTMLParagraphElement>(null)

    function toggleShow() {
        setShow(!show)
    }

    useLayoutEffect(() => {
        if (button.current == null || popup.current == null) return;
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`

    }, [show])

    return (
        <>
            <div style={{ padding: '5vw 2vh' }}>
                <button ref={button} onClick={toggleShow}>Show Popup</button>
                {show && (
                     <p  style={{position: 'absolute'}} ref={popup}>This is popup area</p>
                )
                }
            </div>
        </>
    )
}


export default ShowPopup
