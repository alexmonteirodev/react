import React, { useState } from 'react';
import './app.css'

const App = () => {
  //const message = 'Hello World!'
  const [message, setMessage] = useState('hello world!')

  return (
    <div>
      <div className='container'>{message}</div>
          <button onClick={() => setMessage('hellooooo')}>
            mudar mensagem
          </button>
      </div>
  )
}

export default App