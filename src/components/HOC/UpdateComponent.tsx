import { useState } from "react";

export function UpdateComponent(OriginalComponent: any) {

    function UpdateComponent() {
        const [counter, setCounter] = useState(0)


        function UpdateCounter() {
            setCounter(counter + 1)
        }

        return (<OriginalComponent counter={counter} UpdateCounter={UpdateCounter} />)
    }

    return UpdateComponent
}
