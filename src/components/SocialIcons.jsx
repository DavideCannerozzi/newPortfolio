import React from 'react'
import './SocialIcons.css'
import { FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialIcons(props) {
   return (
      <div>
          <h3 className="social-title text-2xl underline mt-6 italic sm:text-left text-center">{ props.subTitle }</h3>
          <p className="mt-5">{props.contact}</p>
          <MdEmail size="1.5rem" color="red" />
          <a className="underline" href="mailto:d.cannerozzi@gmail.com">d.cannerozzi@gmail.com</a>
          <p className="mt-5">Or Follow me:</p>
          <ul class="mt-6 flex">
               <li className="mr-8">
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer">
                     <FaTwitter color="#1DA1F2" size="2.5rem" className="twitter"/>
                  </a>
               </li>
               <li className="mr-8">
                  <a href="https://github.com/DavideCannerozzi" target="_blank" rel="noopener noreferrer">
                     <FaGithub color="#313030" size="2.5rem" className="github"/>
                  </a>
               </li>
               <li className="mr-8">
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin color="#0881B0" size="2.5rem" className="
                     linkedin"/>
                  </a>
               </li>
         </ul>
      </div>
   )
}
