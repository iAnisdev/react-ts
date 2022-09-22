import { useState , useEffect } from "react";

function getSavedValue(key: string, initial: any) {
    const savedValue =  JSON.parse(localStorage.getItem(key) as string)
    if (savedValue) return savedValue
    if (initial instanceof Function) return initial()
    else return
}

export default function useLocalStorage(key: string , initial: any) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initial)
    })


    useEffect(() => {
      localStorage.setItem(key , JSON.stringify(value))
    
    }, [value])
    
    return [value, setValue]
}