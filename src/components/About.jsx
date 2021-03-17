import React from 'react'
import './About.css'
import SocialIcons from './SocialIcons'
import ProfilePicture from '../images/profile-picture.jpg'
import { GiDonkey } from 'react-icons/gi'

export default function About(props) {
   return (
      <div className="absolute w-full">
         <h2 className="text-center text-4xl p-2">{props.title}</h2>
         <div className="about-container sm:p-0 p-4">
            <GiDonkey className="aDonkey" size="3em" />
            <div className="grid sm:grid-cols-3 grid-cols">
               <div className="description col-span-2 sm:p-12 p-0">
                  <p>{props.aboutMe }</p>
                  <SocialIcons 
                     subTitle="Looking for a developer?" 
                     contact="Email me at:"
                  />
              </div>
              <div className="mt-12">
               <img src={ProfilePicture} className="h-50 w-50 rounded-full shadow-xl" alt="img-davide" />
              </div>
            </div> 
         </div>
      </div>
   )
}
