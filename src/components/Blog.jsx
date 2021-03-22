import React from 'react'
import './Blog.css'
import SinglePost from './singlePost'
import Spaghetti from '../images/spaghetti.png'

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
         <article className="grid sm:grid-cols-2 grid-cols-1">
            { articles.map( article=> (<SinglePost category={article.category} description={article.description} link={article.link}/>))}
         </article>
     
      </div>
     </div> 
      
   )
}
