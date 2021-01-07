import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'
import Bar from './Bar'

export default function Blog(props) {
   const links = {
      one:'https://codingandbeers.com/create-react-app/',
      two:'https://codingandbeers.com/how-to-center-a-div-with-flexbox/'
   }
   return (
      <article className=" text-center blog-container">
         <div className="header-blog">
            <h2 className="text-2xl">{props.header}</h2>
         </div>
         <p>{props.description}</p>
         <SinglePost title="CSS3 | Flexbox" description="How To Center A DIV With Flexbox" link={links.one}/>
         <Bar />
         <SinglePost title="React" description="Set Up A React Project With Create-React-App" link={links.two}/>
         <Bar />
      </article>
   )
}
