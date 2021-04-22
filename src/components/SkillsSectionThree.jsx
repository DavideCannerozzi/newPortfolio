import React from 'react'

export default function SkillsSectionThree(){
   const skillsIcons = [
      {id:1, name:'React', class:'font-bold'},
      {id:2, name:'Vue', class:'font-bold'},
      {id:3, name:'Javascript ES6', class:'font-bold'},
      {id:4, name:'GraphQL', class:'graphql font-bold'},
      {id:5, name:'Responsive Design', class:'responsive-design font-bold'},
      {id:6, name:'TailwindCss', class:'tailwind font-bold'},
      {id:7, name:'Bootstrap', class:'bootstrap font-bold'},
      {id:8, name:'Chrome Developer Tools', class:'chrome font-bold'},
      {id:9, name:'Wordpress', class:'font-bold'},
   ]
   return(
      <div className="test-div mt-4 p-2 ml-2 mr-2 shadow-2xl">
         <div className="grid grid-cols-1">
            <ul className="leading-8">
               {skillsIcons.map( skillIcon => (<li id={skillIcon.id} className={skillIcon.class}>{skillIcon.name}</li>))}
            </ul>
         </div>
      </div> 
   )
}