import React from 'react'
import './ContactMe.css'

export default function ContactMe(){

   const socialIcons = [
      { id:1, href:"https://twitter.com/Davide_Code",class:'fab fa-2x fa-twitter twitter'},
      { id:2, href:"https://github.com/DavideCannerozzi", class:'fab fa-2x fa-github github ml-8'},
      { id:3, href:"https://github.com/DavideCannerozzi", class:'fab fa-2x fa-linkedin linkedin ml-8'}
]
      return(
      <>
         <a href="mailto:d.cannerozzi@gmail.com"><button className="rounded-md contact-btn p-4 mt-6">Get In Touch</button></a>
         <div>
            <ul class="mt-6 flex">
               { socialIcons.map( SocialIcon =>(<li className={SocialIcon.id}><i className={SocialIcon.class}></i></li>) )}
            </ul>
         </div>
      </>
   )
}