import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import ToggleButton  from './components/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <Clock/>
        <ToggleButton/>
      </header>
    </div>
  )
}

export default App
