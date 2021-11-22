import React from 'react'
import sendSplToken from '../../src/utils/sendSplToken'

const Test = () => {
  const handleSendToken = () => {
    sendSplToken(5);
  }
    return (
        <><p>Boton para lanzar main</p>
          <button onClick={handleSendToken}>Click me</button>  
        </>
    )
}

export default Test
