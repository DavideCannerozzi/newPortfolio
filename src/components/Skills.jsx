import React from 'react'
import './Skills.css'
import { IconContext } from 'react-icons'
import { FaHtml5,FaCss3Alt,FaReact,FaVuejs,FaGitSquare,FaPython,FaWordpress } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import ImprovingImage from '../images/improving.png'
import DevImage from '../images/dev.png'
import ResponsiveImage from '../images/responsive-dev.png'
import WordpressImage from '../images/wordpress.png'
import Bar from './Bar'
import Cards from './Cards'

export default function Skills(props) {
   return (
      <IconContext.Provider value={{ size:'6em', style: { margin:'0 auto'} }}>
      <div>
         <h2 className="text-center text-4xl p-2">{props.header}</h2>
            <div className="container-skills">
             <div className="grid sm:grid-cols-3 grid-cols-2 py-4 justify-center">
               <FaHtml5 color="#e54c21"/>
               <FaCss3Alt color="#264de4"/>
               <SiJavascript color="#f0db4f"/>
            </div>
            <div className="grid sm:grid-cols-2 py-4">
               <FaReact color="#00d8ff"/>
               <FaVuejs color="#41B883"/>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 py-4">
               <FaPython />
               <FaGitSquare color="#EB4D28" />
               <FaWordpress color="#21759B"/>
           </div> 
            <Bar />
            <h2 className="mt-16 text-4xl text-center">{props.subHeader}</h2>
            <div className="cards-container grid grid-cols-3">
                  <Cards title="Web Development" image={DevImage} content="I can build website using modern...clean code and new technologies such as React and Vue"/>
                  <Cards title="Responsive Website" image={ResponsiveImage} content="I will make your website adapts easily to any screen size. Responsive design layout for all devices is a top priority"/>
                  <Cards title="Optimization" image={ResponsiveImage}/>
                  <Cards title="Wordpress" image={WordpressImage}/>
                  <Cards title="Improving" image={ImprovingImage} content="Constantly continues to learn new technologies and keeping up-to-date with the freshest trends" />
                  <Cards title="SEO" image={ResponsiveImage} content="Seo Google" />
            </div>
            </div>
      </div>
      </IconContext.Provider>
   )
}
