import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => {
  return(
  <button onClick={handler}>{text}</button>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  const addAll = () => {
    setAll(good + bad + neutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => {setGood(good+1); addAll()}} text='good'/>
      <Button handler={() => {setNeutral(neutral+1); addAll()}} text='neutral'/>
      <Button handler={() => {setBad(bad + 1); addAll()}} text='bad'/>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>bad {bad}</div>
      <div>neutral {neutral}</div>
      <div>all {all}</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)