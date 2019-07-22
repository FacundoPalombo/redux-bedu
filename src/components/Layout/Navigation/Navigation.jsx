import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="flex row center">
      <ul className="flex row nav-list">
        <li className="nav-items"><Link to="/">Home</Link></li>
        <li className="nav-items"><Link to="/characters">Characters</Link></li>
        <li className="nav-items"><Link to="/episodes">Episodes</Link></li>
        <li className="nav-items"><Link to="/">Example</Link></li>
      </ul>
    </nav>
  )
}
