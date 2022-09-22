import React, { useState , useCallback} from 'react'

function HookuseCallback() {
  const [number, setNumber] = useState(() => {
    return 0
  })
  const [styleSet, setStyleSet] = useState(() => {
    return {
      background: 'red',
      color: 'white'
    }
  })
  function getNextSquars(number: number): number[] {
    console.log('changing numbers' , number)
    let suqares = [number]
    for (var i = 1; i <= 5; i++) {
      suqares.push(suqares[i - 1] * number)
    }
    return suqares
  }
  
  const squareList = useCallback(() =>  getNextSquars(number), [number])

  function changeTheme() {
    if (styleSet.background === 'red') {
      setStyleSet({
        background: 'black',
        color: 'white'
      })
    } else {
      setStyleSet({
        background: 'red',
        color: 'white'
      })
    }
  }

  const list = React.Children.map(squareList(), ((snumber) => {
    return <li>{snumber}</li> 
  }))

  return (
    <>
      <div style={{ padding: '2vh 5vw' }}>
        <input type="number" value={number} onChange={(e) => { setNumber(+e.target.value) }} />
        <br />
        <button onClick={changeTheme}>Change Theme</button>
        <div style={styleSet}>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </>
  )
}

export default HookuseCallback