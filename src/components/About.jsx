import React from 'react'
import './About.css'
import SocialIcons from './SocialIcons'
import profilePicture from '../images/davide.jpg'

export default function About(props) {
   return (
      <section>
         <h2 className="text-center text-2xl py-6">{props.title}</h2>
         <div className="about-container">
            <div className="description">
               <p>{props.aboutMe }</p>
               <SocialIcons title="Looking for a developer?" subtitle="Email me at:" />
            </div>
            <div className="image">
               <img className="profile-picture" src={profilePicture} alt="profile-pic" />   
            </div>
         </div>
      </section>
   )
}
