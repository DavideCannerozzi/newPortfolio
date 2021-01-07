import React from 'react'
import './Skills.css'
import { IconContext } from 'react-icons'
import { FaHtml5,FaCss3Alt,FaReact,FaVuejs,FaGitSquare,FaPython } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import Bar from './Bar'
import WebDev from '../images/web-dev.png'
import ResponsiveImage from '../images/responsive.jpg'
import WordpressImage from '../images/wordpress.png'
import Cards from './Cards'

export default function Skills(props) {
   return (
      <IconContext.Provider value={{ size:'5em', style: { margin:'0 auto'}}}>
      <div>
         <h2 className="text-center text-2xl py-2">{props.header}</h2>
            <div className="container-skills">
            <div className="grid grid-cols-3 justify-center">
               <FaCss3Alt className="move-left" color="#264de4"/>
               <FaHtml5 color="#e54c21"/>
               <SiJavascript className="move-right" color="#f0db4f"/>
            </div>
            <div className="grid grid-cols-2">
               <FaReact className="fadein" color="#00d8ff"/>
               <FaVuejs className="fadein" color="#41B883"/>
            </div>
            <div className="grid grid-cols-2">
               <FaGitSquare className="move-left" color="#EB4D28"/>
               <FaPython className="move-right"/>
            </div>
            <Bar />
               <h2 className="mt-5 text-center">{props.subHeader}</h2>
            <div className="cards-container grid grid-cols-3">
                  <Cards title="Web Development" image={WebDev}/>
                  <Cards title="Responsive Website" image={WebDev}/>
                  <Cards title="Optimization" image={ResponsiveImage}/>
                  <Cards title="Wordpress" image={WordpressImage}/>
            </div>
            </div>
      </div>
      </IconContext.Provider>
   )
}
