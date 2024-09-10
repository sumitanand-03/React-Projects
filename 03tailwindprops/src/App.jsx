import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "sumit",
    age: 21
  }
  return (
    <> 
    <h1 className='bg-green-400 text-white p-4 rounded mb-4'>Tailwind Test</h1>
    <Card username = "chaiaurcode" btnText = "Click me"/>
    <Card username = "Sumit" />

    </>
  )
}

export default App
