import React from 'react'
import './SocialIcons.css'

export default function SocialIcons(props) {
   return (
      <div>
          <h3 className="social-title mt-6 text-3xl">{ props.title }</h3>
          <p className="mt-5">{props.subtitle}</p>
          <i className="fa fa-envelope mt-2" aria-hidden="true"></i><a className="underline ml-3" href="mailto:d.cannerozzi@gmail.com">d.cannerozzi@gmail.com</a>
          <p className="mt-5">Or Follow me:</p>
          <ul class="mt-6">
               <li>
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-twitter-square"></i></a>
               </li>
               <li>
                  <a href="https://github.com/DavideCannerozzi" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-github-square"></i></a>
               </li>
               <li>
                  <a href="https://twitter.com/Davide_Code" target="_blank" rel="noopener noreferrer"><i class="fab fa-3x fa-angellist"></i></a>
               </li>
         </ul>
      </div>
   )
}
