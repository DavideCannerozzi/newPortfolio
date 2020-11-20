import React from 'react'
import './Skills.css'
import Cards from './Cards'

export default function Skills(props) {
   return (
      <div>
         <h2 className="text-center text-2xl py-6">{props.header}</h2>
         <div className="container-skills">
            <div className="grid grid-cols-3">
               <i class="fab fa-5x fa-html5"></i>
               <i class="fab fa-5x fa-css3-alt"></i>
               <i class="fab fa-5x fa-js-square"></i>
            </div>
            <div className="grid grid-cols-4 mt-5">
               <i class="fab fa-5x fa-react"></i>
               <i class="fab fa-5x fa-vuejs"></i>
               <i class="fab fa-5x fa-python"></i>
               <i class="fab fa-5x fa-wordpress"></i>
            </div>
            <div className="grid grid-cols-2 mt-5">
               <i class="fab fa-5x fa-bootstrap"></i>
               <i class="fab fa-5x fa-sass"></i>
            </div>
            <h2 className="mt-5 text-center">{props.subHeader}</h2>
            <div className="cards-container grid grid-cols-3">
               <Cards title="Web Development" />
               <Cards title="Responsive Website"/>
               <Cards title="Optimization"/>
               <Cards title="Wordpress" />
            </div>
         </div>
      </div>
   )
}
