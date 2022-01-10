import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import ToggleButton  from './components/ToggleButton'

function App() {
  const [count, setCount] = useState(0);
  const content = <p>Made by <a href="https://github.com/Rende11/ddtReactCourse">@rende11.</a></p>
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <Clock/>
        <ToggleButton content = {content} />
      </header>
    </div>
  )
}

export default App
