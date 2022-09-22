import { useContext } from 'react'

import { LanguageContext } from '../../Contexts/LanguageContext'

function ContextSub() {

  const { Language, SetLanguage } = useContext(LanguageContext)

  return (
    <div style={{ color: 'white', backgroundColor: 'green', padding: '5vw 2vh' }}>
      <h5>Sub with Language {Language} </h5>
      <div style={{ padding: '1vh 1vw' }}>
        <button onClick={() => { SetLanguage('zh') }}>Change Language</button>
      </div>
    </div>
  )
}

export default ContextSub