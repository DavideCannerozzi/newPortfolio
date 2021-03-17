import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {

   const navItems = [
      { to:'/', name:"Home Page"},
      { to:'/About', name:"About Me"},
      { to:'/Skills', name:"Skills"},
      { to:'Projects', name:'Projects'},
      { to:'/Blog', name:'Blog'}
   ]
   const styles = {
      className:"mr-8",
      activeClassName:"active"
   }

   return (
      <nav className="navbar p-4">
      <div className="mobile-menu"></div>
       <ul className="text-white sm:flex block justify-center">
          { navItems.map(navItem => (<NavLink exact="true" className={styles.className} activeClassName={styles.activeClassName}to={navItem.to}>{navItem.name}</NavLink>)) }
       </ul>
      </nav>
   )
}
