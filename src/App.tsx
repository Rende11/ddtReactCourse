import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import ToggleButton  from './components/ToggleButton'
import UserCard from './components/UserCard'


function App() {
  const [count, setCount] = useState(0);
    const content = <p>Made by <a href="https://github.com/Rende11/ddtReactCourse">@rende11.</a></p>;

    const userData = {
        avatarUrl: "https://i.pravatar.cc/220",
        name: {
            content: "John",
            label: "Name"
        },
        surname: {
            content: "Doe",
            label: "Surname"
        },
        birthdate: {
            content: "10.10.1991",
            label: "Birthdate"
        },
        gender: {
            content: "Both",
            label: "Gender"
        },
        ceiling: {
            content: "Wooden",
            label: "Ceiling"
        },
        mood: {
            content: "ZBS",
            label: "Mood"
        },
        status: "Only Clojure is good enough..."
    };

    return (
        <div className="App">
          <header className="App-header">
            <section className="header-section section-left">
              <Clock/>
              <ToggleButton content = {content} />
            </section>
            <section className="header-section section-right">
              <UserCard userData = {userData} />
            </section>
          </header>
        </div>
    )
}

export default App;
