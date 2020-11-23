import React from 'react'
import './Skills.css'
import Bar from './Bar'
import Cards from './Cards'

export default function Skills(props) {
   return (
      <div>
         <h2 className="text-center text-2xl py-6">{props.header}</h2>
         <div className="container-skills">
            <div>
               <ul className="grid grid-cols-3 text-center">
                  <li><i class="fab fa-5x fa-html5"></i>
                     <p>HTML</p>
                  </li>
                  <li><i class="fab fa-5x fa-css3-alt"></i>
                     <p>CSS</p>
                  </li>
                  <li><i class="fab fa-5x fa-js-square"></i>
                     <p>Javascript</p>
                  </li>
               </ul>
            </div>
            <div>
               <ul className="grid grid-cols-4 mt-5 text-center">
                  <li><i class="fab fa-5x fa-react"></i></li>
                  <li><i class="fab fa-5x fa-vuejs"></i></li>
                  <li><i class="fab fa-5x fa-python"></i></li>
                  <li><i class="fab fa-5x fa-wordpress"></i></li>
               </ul>
            </div>
            <div>
               <ul className="grid grid-cols-2 mt-5 text-center">
                  <li><i class="fab fa-5x fa-bootstrap"></i></li>
                  <li><i class="fab fa-5x fa-sass"></i></li>
               </ul>
            </div>
            <Bar />
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
