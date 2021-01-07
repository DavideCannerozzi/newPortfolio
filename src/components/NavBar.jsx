import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
   return (
      <nav className="navbar p-4">
       <ul className="text-white flex justify-center font-bold">
          <li className="mr-8"><NavLink to='/' exact={true} activeClassName="active">Home Page</NavLink></li>
          <li className="mr-8"><NavLink to='/About' activeClassName="active">About Me</NavLink></li>
          <li className="mr-8"><NavLink to="/Skills" activeClassName="active">Skills</NavLink></li>
          <li className="mr-8"><NavLink to='/Projects' activeClassName="active">Projects</NavLink></li>
          <li className="mr-8"><NavLink to="/Blog" activeClassName="active">Blog</NavLink></li>
       </ul>
      </nav>
   )
}
