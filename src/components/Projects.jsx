import React from 'react'
import './Projects.css'
import Cards from './Cards'

export default function Projects() {
   return (
      <div className="projects-container">
         <h2 className="text-center text-2xl py-6">Projects</h2>
         <div className="grid grid-cols-3">
            <Cards />
            <Cards />
            <Cards />
         </div>
         
      </div>
   )
}
