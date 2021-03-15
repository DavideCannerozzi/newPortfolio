import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'
import flexboxLogo from '../images/flexbox-logo.jpg'

export default function Blog(props) {
   const links = {
      one:'https://codingandbeers.com/create-react-app/',
      two:'https://codingandbeers.com/how-to-center-a-div-with-flexbox/'
   }

   return (
      <article className=" text-center blog-container">
         <div className="header-blog">
            <h2 className="text-4xl p-2">{props.header}</h2>
         </div>
         <div className="grid grid-cols-2">
         <SinglePost image={flexboxLogo} description="How To Center A DIV With Flexbox" link={links.one}/>
         <SinglePost image={flexboxLogo} description="Set Up A React Project With Create-React-App" link={links.two}/>
         </div>
     
      </article>
   )
}
