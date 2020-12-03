import React from 'react'
import './Blog.css'
import BlogPosts from './blogPosts'
import Bar from './Bar'

export default function Blog(props) {
   const links = {
      one:'https://codingandbeers.com/create-react-app/',
      two:'https://codingandbeers.com/how-to-center-a-div-with-flexbox/'
   }
   return (
      <div className=" text-center blog-container">
         <div className="header-blog">
            <h2 className="text-2xl">{props.header}</h2>
         </div>
         <p>{props.description}</p>
         <BlogPosts title="CSS3 | Flexbox" description="How To Center A DIV With Flexbox" link={links.one}/>
         <Bar />
         <BlogPosts title="React" description="Set Up A React Project With Create-React-App" link={links.two}/>
         <Bar />
      </div>
   )
}
