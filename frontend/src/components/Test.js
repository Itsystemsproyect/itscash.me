import React from 'react'
import sendSplToken from '../../src/utils/sendSplToken'

const Test = () => {
  const handleSendToken = () => {
    sendSplToken(10, '8tiVQpG29Rcb2Xt8355k4iDAfoLq1LJPJi7gwVxGb19p', 2);
  }
    return (
        <><p>Boton para lanzar main</p>
          <button onClick={handleSendToken}>Click me</button>  
        </>
    )
}

export default Test
