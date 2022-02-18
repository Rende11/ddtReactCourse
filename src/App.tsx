import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import ToggleButton  from './components/ToggleButton'
import UserCard from './components/UserCard'


function App() {
  const [count, setCount] = useState(0);
    const content = <p>Made by <a href="https://github.com/Rende11/ddtReactCourse">@rende11.</a></p>
    return (
    <div className="App">
      <header className="App-header">
        <section className="header-section section-left">
          <p>Hello Vite + React!</p>
          <Clock/>
          <ToggleButton content = {content} />
        </section>
        <section className="header-section section-right">
          <UserCard />
        </section>
      </header>
    </div>
    )
}

export default App;
