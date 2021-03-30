import React from 'react'
import './Skills.css'
import ImprovingImage from '../images/improving.png'
import DevImage from '../images/dev.png'
import ResponsiveImage from '../images/responsive-dev.png'
import WordpressImage from '../images/wordpress.png'
import Bar from './Bar'
import Cards from './Cards'

export default function Skills(props) {

   

   return (
      <div className="absolute w-full">
         <h2 className="text-center text-4xl p-2">{props.header}</h2>
            <div className="container-skills text-center">
               <div className="grid grid-cols-2">
                  <div className="skills-section border-2">
                     <div className="grid grid-col-1">
                     <i class="fab fa-4x fa-html5"></i>
                     <div className="line"></div>
                     </div>  
                     <div className="grid grid-col-1 mt-10">
                     <i class="fab fa-4x fa-css3-alt"></i>
                     <div className="line"></div>
                     </div>
                     <div className="grid grid-col-1 mt-10">
                     <i class="fab fa-4x fa-js-square"></i>
                     </div>
                     <div className="grid grid-cols-2 mt-10">
                        <i class="fa-4x fab fa-react mr-24"></i>
                        <i class="fa-4x fab fa-vuejs"></i>
                     </div>
                  </div>
                  <div className="other-skills mt-10 py-10">
                     <div className="grid grid-cols1 border-2">
                        <h3>Other Skills</h3>
                        <div className="flex justify-around mt-10">
                           <i class="fab fa-3x fa-bootstrap"></i>
                           <i class="fab fa-3x fa-wordpress"></i>
                           <i class="fab fa-3x fa-git"></i>
                           <i class="fab fa-3x fa-sass"></i>
                           <i class="fab fa-3x fa-python"></i>
                        </div>
                        
                     </div>
                  </div>
               </div> 
             

            <Bar />
            <h2 className="mt-16 text-4xl text-center">{props.subHeader}</h2>
            <div className="cards-container grid sm:grid-cols-3 grid-cols-1">
                  <Cards title="Web Development" image={DevImage} content="I can build website using modern...clean code and new technologies such as React and Vue"/>
                  <Cards title="Responsive Website" image={ResponsiveImage} content="I will make your website adapts easily to any screen size. Responsive design layout for all devices is a top priority"/>
                  <Cards title="Other Skills" image={ResponsiveImage}/>
                  <Cards title="Wordpress" image={WordpressImage}/>
                  <Cards title="Improving" image={ImprovingImage} content="Constantly continues to learn new technologies and keeping up-to-date with the freshest trends" />
                  <Cards title="SEO" image={ResponsiveImage} content="Seo Google" />
            </div>
            </div>
      </div>
   )
}
