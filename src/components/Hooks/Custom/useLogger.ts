import { useEffect } from "react";

export default function useLogger(value: any) {

    useEffect(() => {
       if(value) console.log(value)
    }, [value])


}