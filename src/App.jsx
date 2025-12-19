import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greetings from './components/Greetings'
import User from './components/User'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'> 
        <Greetings message="Hello React"/>
        <User name = "Aung Sann Thit"/>
       </div> 
    </>
  
  )
}

export default App
