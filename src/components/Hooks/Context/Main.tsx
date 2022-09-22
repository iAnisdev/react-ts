import { useContext } from 'react'
import ContextChild from './Child'

import { LanguageContext } from '../../Contexts/LanguageContext'

function ContextMain() {

  const { Language, SetLanguage } = useContext(LanguageContext)

  return (
      <div style={{ color: 'white', backgroundColor: 'black', padding: '5vw 2vh' }}>
        <h3>Context API with Language {Language} </h3>
        <div style={{ padding: '1vh 1vw' }}>
          <button onClick={() => { SetLanguage('en') }}>Change Language</button>
        </div>
        <ContextChild />
      </div>
  )
}

export default ContextMain