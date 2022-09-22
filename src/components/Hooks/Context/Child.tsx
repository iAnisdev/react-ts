import ContextSub from "./Sub";

import { LanguageContext } from './../../Contexts/LanguageContext'

import { useContext } from "react";

export default function ContextChild() {

    const { Language, SetLanguage } = useContext(LanguageContext)

    return (
        <div style={{ color: 'white', backgroundColor: 'red', padding: '5vw 2vh' }}>
            <h5>Child with Language {Language} </h5>
            <div style={{ padding: '1vh 1vw' }}>
                <button onClick={() => { SetLanguage('th') }}>Change Language</button>
            </div>
            <ContextSub />
        </div>
    )
}
