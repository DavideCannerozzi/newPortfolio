import React from 'react'
import './Skills.css'
import SkillsSectionTwo from './SkillsSectionTwo'
import SkillsSectionThree from './SkillsSectionThree'

export default function Skills(props) {
const IconsImg = [
      { id:1, class:"fab fa-4x fa-html5" },
      { id:2, class:"fab fa-4x fa-css3-alt" },
      { id:3, class:"fab fa-4x fa-js-square" },
      { id:4, class:"fab fa-4x fa-vuejs" },
      { id:5, class:"fab fa-4x fa-react" }
   ]

   return (
      <div className="absolute w-full">
         <h2 className="text-center text-4xl p-2">{props.header}</h2>
            <div className="container-skills text-center">
               <div className="grid grid-cols-2">
                  <div className="skills-section border-2 p-10">
                      { IconsImg.map( IconImg => ( <i id={IconImg.id} className={IconImg.class}></i>))} 
                  </div>
                  <div>
                     <SkillsSectionTwo />
                     <SkillsSectionThree />
                  </div>
               </div>
            </div>
      </div>
   )
}
