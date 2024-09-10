import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  // let counter = 5;
  let [counter, setCounter] = useState(5);
  const addValue = () => {
    // counter = counter +1
    setCounter(counter + 1)
    // console.log("Clicked", counter);
  }

  const removeValue = () => {
    // counter = counter -1 
    setCounter(counter -1)
  }

  return (
    <>
    <h1>Hey Sumit</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}>Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
