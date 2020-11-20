import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
   return (
      <nav className="navbar">
       <ul className="text-white font-bold">
          <li><NavLink to='/' exact={true}>Home Page</NavLink></li>
          <li><NavLink to='/About'>About Me</NavLink></li>
          <li><NavLink to="/Skills">Skills</NavLink></li>
          <li><NavLink to='/Projects'>Projects</NavLink></li>
          <li><NavLink to="/Blog">Blog</NavLink></li>
       </ul>
      </nav>
   )
}
