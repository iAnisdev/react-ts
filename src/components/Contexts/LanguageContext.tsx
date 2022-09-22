import { useState, createContext , Dispatch , SetStateAction } from "react";

interface LanguageContextInterface  {
    Language: string
    SetLanguage: Dispatch<SetStateAction<string>>
}
export const LanguageContext = createContext<LanguageContextInterface>({Language: 'en' , SetLanguage: () => {}})

function LanguageContextProvider(props: { children: any }) {

    const [Language, SetLanguage] = useState(() => {
        return 'en'
    })
    
    return (
        <LanguageContext.Provider value={{ Language, SetLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}


export default LanguageContextProvider