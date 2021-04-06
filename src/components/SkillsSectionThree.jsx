import React from 'react'

export default function MoreSkillsTwo(){
   const skillsIconsLeft = [
      {id:1, name:'React Hooks'},
      {id:2, name:'React Router'},
      {id:3, name:'Redux'}
   ]
   const skillsIconsRight = [
      {id:4, name:'GraphQL'},
      {id:5, name:'TailwindCss'},
      {id:6, name:'Bootstrap'},
      {id:7, name:'Chrome Developer Tools'},
   ]
   return(
         <div className="test-div mt-6 p-2 ml-2 mr-2 shadow-2xl">
            <div className="grid grid-cols-2">
                  <ul className="leading-8">
                     {skillsIconsLeft.map( skillIcon => (<li id={skillIcon.id}>{skillIcon.name}</li>))}
                  </ul>
                     <ul className="leading-8">
                        {skillsIconsRight.map( skillIcon => (<li id={skillIcon.id}>{skillIcon.name}</li>))}
                     </ul>
               </div>
         </div> 
         )
}