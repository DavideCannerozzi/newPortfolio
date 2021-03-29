import React from 'react'
import './About.css'
import Bar from './Bar'
import ContactMe from './ContactMe'
import ProfilePicture from './ProfilePicture'
import ProfileImg from '../images/profile-picture.jpg'

export default function About(props) {
   return (
      <div className="absolute w-full">
         <h2 className="text-center text-4xl p-2">{props.title}</h2>
         <div className="about-container sm:p-0 p-4">
            <div className="grid md:grid-cols-3 grid-cols">
               <div className="col-auto md:col-span-2 sm:p-12 p-0">
                  <p>{props.aboutMe }</p>
                  <Bar />
                  <h2 className="text-bold text-2xl underline mt-6 italic sm:text-left text-center">{ props.lookingFor}</h2>
                  <ContactMe />
              </div>
             <ProfilePicture href={ProfileImg} alt="img-davide" /> 
            </div> 
         </div>
      </div>
   )
}
