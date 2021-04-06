import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'
import ContactMe from './ContactMe'

export default function Blog(props) {
   const articles = [
      { category:"css", description:"how to center a div with flexbox", link:"" },
      { category:"react", description:"set up a react project with create-react-app", link:"https://codingandbeers.com/create-react-app/"}
   ]

   return (
     <div className="absolute w-full">
        <div className="text-center blog-container">
         <div className="header-blog w-72 mx-auto mt-4 mb-2">
            <h2 className="text-4xl p-2 relative">{props.header}</h2>
         </div>
         <a href="https://codingandbeers.com/" className="border-blue-500 rounded underline p-2">{props.link}</a>
         <article className="grid sm:grid-cols-2 grid-cols-1">
            { articles.map( article=> (<SinglePost category={article.category} description={article.description} link={article.link}/>))}
         </article>
         <div className="border-2 mt-10">
            <h3>Got inspired? Did i Help you? You want to work with me? Contact me and Let's talk</h3>
            <ContactMe />
         </div>
      </div>
     </div> 
      
   )
}
