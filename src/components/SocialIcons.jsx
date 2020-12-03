import React from 'react'
import './SocialIcons.css'
import { FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialIcons(props) {
   return (
      <div>
          <h3 className="social-title mt-6 text-3xl">{ props.title }</h3>
          <p className="mt-5">{props.subtitle}</p>
          <MdEmail size="1.5rem" color="red" />
          <a className="underline" href="mailto:d.cannerozzi@gmail.com">d.cannerozzi@gmail.com</a>
          <p className="mt-5">Or Follow me:</p>
          <ul class="mt-6">
               <li>
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer">
                     <FaTwitter color="#1DA1F2" size="2.5rem" className="social-icons twitter"/>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/DavideCannerozzi" target="_blank" rel="noopener noreferrer">
                     <FaGithub color="#313030" size="2.5rem" className="social-icons github"/>
                  </a>
               </li>
               <li>
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin color="#0881B0" size="2.5rem" className="social-icons linkedin"/>
                  </a>
               </li>
         </ul>
      </div>
   )
}
