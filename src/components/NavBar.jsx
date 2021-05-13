import React, { useState } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
   const navItems = [
      { to:'/', name:"Home Page",class:'mr-8' },
      { to:'/About', name:"About Me", class:'mr-8'},
      { to:'/Skills', name:"Skills", class:'mr-8'},
      { to:'Projects', name:'Projects', class:'mr-8'},
      { to:'/Blog', name:'Blog', class:'mr-8'}
   ]

   const [openMenu,SetOpenMenu] = useState(false)
   return (
      <nav className="p-4">
         <div className="block lg:hidden">
            <FontAwesomeIcon
               icon={ faBars }
               onClick={ ()=> SetOpenMenu(!openMenu)}
               color="white"
            />
         </div>
         <div className="navigation">
            <ul className={`lg:flex text-center justify-center text-white mobile ${  openMenu ? "block" : "hidden" } `}>
            { navItems.map(navItem => (<NavLink className={ navItem.class }exact="true" to={navItem.to}>{navItem.name}</NavLink>)) }
            </ul>
         </div>
      </nav>
   )
}
