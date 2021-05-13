import React from 'react'
import './ContactMe.css'

export default function ContactMe(){

   const socialIcons = [
      { id:1, href:"https://twitter.com/Davide_Code",class:'fab fa-2x fa-twitter twitter'},
      { id:2, href:"https://github.com/DavideCannerozzi", class:'fab fa-2x fa-github github ml-8'},
      { id:3, href:"https://github.com/DavideCannerozzi", class:'fab fa-2x fa-linkedin linkedin ml-8'}
   ]
      return(
      <div className="md:text-left text-center">
         <a href="mailto:d.cannerozzi@gmail.com"><button className="rounded-md transition duration-500     contact-btn p-4 mt-6">Contact Me</button></a>
            <ul className="mt-10 flex md:justify-start justify-center">
               { socialIcons.map( SocialIcon =>(<li className={SocialIcon.id}><a href={SocialIcon.href} target="_blank" rel="noreferrer"><i className={SocialIcon.class}></i></a></li>)) }
            </ul>
      </div>
   )
}