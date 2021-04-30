import React from 'react'
import MainSkills from './MainSkill'
import SecondarySkillsSection from './SecondarySkillsSection'
import LanguageSkillsSection from './LanguageSkillsSection'
import './Skills.css'


export default function Skills(props) {

   return(
      <div className="container-skills">
         <h2 className="text-4xl text-center">{props.header}</h2>
         <MainSkills />
         <SecondarySkillsSection />
         <LanguageSkillsSection header="Languages Spoken" />
      </div>
   )
}
