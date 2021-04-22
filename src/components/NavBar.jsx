import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
      className:"mr-8 block",
      activeClassName:"active",

   }

   const [openMenu,SetOpenMenu] = useState(false)

   let navMenu;
   if(openMenu){
      navMenu = <ul className="text-white w-100">
      { navItems.map(navItem => (<NavLink exact="true" className={styles.className} activeClassName={styles.activeClassName}to={navItem.to}>{navItem.name}</NavLink>)) }
   </ul>
   }

   return (
      <nav className="navbar p-4">
         <div className="block md:hidden">
         <FontAwesomeIcon
            icon={faBars}
            onClick={ ()=> SetOpenMenu(!openMenu)}
            color="white"
         />
      </div>
      <div className="navigation">
         <ul className="text-white sm:flex block justify-center">
            { navItems.map(navItem => (<NavLink exact="true" className={styles.className} activeClassName={styles.activeClassName}to={navItem.to}>{navItem.name}</NavLink>)) }
         </ul>
      </div>
         { navMenu }
      </nav>
   )
}
