import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(0)

  const incrementCount = () =>{
    if(count>=20){
      alert("You have reached the limit!")
      return
    }
    setCount(count + 1)
  }

  const decrementCount = () =>{
    if(count<=0){
      alert("You have reached the limit!")
      return
    }
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value is : {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <button onClick={decrementCount}>Decrement</button>
    </>
  )
}

export default App
