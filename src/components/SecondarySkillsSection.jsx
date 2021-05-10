import React from 'react'

export default function SecondarySkillsSection(){
   const skillsIconsLeft = [
      { id:1, name:'GraphQL',class:'font-bold' },
      { id:2, name:'React Router', class:'font-bold' },
      { id:3, name:'Redux', class:'font-bold' },
      { id:4, name:'Sass', class:'font-bold' },
      { id:5, name:'Responsive Design', class:'font-bold' }
   ]
   const skillsIconsRight = [
      { id:6, name:'TailwindCss', class:'font-bold' },
      { id:7, name:'Bootstrap', class:'font-bold' },
      { id:8, name:'Git/Version Control', class:'font-bold' },
      { id:9, name:'Chrome Developer Tools', class:'font-bold' },
      { id:10, name:'Wordpress', class:'font-bold' }
   ]
   return(
         <div className="skills-secondary p-6 border-t-4 border-blue-900 grid md:grid-cols-2 grid-cols-1 text-center">
            <ul className="leading-10">
               { skillsIconsLeft.map( skillIcon => (<li id={ skillIcon.id } className={ skillIcon.class }>{ skillIcon.name }</li>))}
            </ul>
            <ul className="leading-10">
               { skillsIconsRight.map( skillIcon => (<li id={ skillIcon.id } className={ skillIcon.class }>{ skillIcon.name }</li>))}
            </ul>
         </div>
   )
}