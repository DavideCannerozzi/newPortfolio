import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'
import ContactMe from './ContactMe'

export default function Blog(props) {
   const articles = [
      { category:"react", description:"how to center a div with flexbox", link:"https://codingandbeers.com/create-react-app/" },
      { category:"css", description:"set up a react project with create-react-app", link:"https://codingandbeers.com/how-to-center-a-div-with-flexbox/"}
   ]

   return (
     <div className="absolute w-full">
        <div className="text-center blog-container">
         <div className="header-blog">
            <h2 className="text-4xl p-2">{props.header}</h2>
         </div>
         <a href="https://codingandbeers.com/" className="border-blue-500 rounded p-2">{props.link}</a>
         <article className="grid sm:grid-cols-2 grid-cols-1">
            { articles.map( article=> (<SinglePost category={article.category} description={article.description} link={article.link}/>))}
         </article>
         <div className="border-2 mt-10">
            <h2>Got inspired? Did i Help you? You want to work with me? Contact me and Let's talk</h2>
            <ContactMe />
         </div>
      </div>
     </div> 
      
   )
}
