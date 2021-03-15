import React from 'react'
import './About.css'
import SocialIcons from './SocialIcons'
import ProfilePicture from '../images/profile-picture.jpg'
import { GiDonkey } from 'react-icons/gi'

export default function About(props) {
   return (
      <section>
         <h2 className="text-center text-4xl p-2">{props.title}</h2>
         <div className="about-container">
            <GiDonkey className="aDonkey" size="3em" />
            <div className="grid grid-cols-3">
               <div className="description col-span-2 p-12">
                  <p>{props.aboutMe }</p>
                  <SocialIcons 
                     subTitle="Looking for a developer?" 
                     contact="Email me at:"
                  />
              </div>
              <div className="mt-12">
               <img src={ProfilePicture} className="h-50 w-50 rounded-full" alt="img-davide" />
              </div>
            </div> 
         </div>
      </section>
   )
}
