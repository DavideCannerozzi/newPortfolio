import React from 'react'

export default function SkillsSectionTwo(props){
   const IconsSkills = [
      {id:2, class:'fab fa-3x fab fa-npm'},
      {id:3, class:'fab fa-3x fa-git'},
      {id:4, class:'fab fa-3x fa-sass'}
   ]
   return(
      <div className="flex justify-around other-skills mt-10 p-4">
         { IconsSkills.map( IconSkill =>(<i id={IconSkill.id} className={IconSkill.class}></i>) )}                  
      </div>
   )
}