import React from 'react'

export default function blogPosts(props) {
   return (
      <div>
         <div className="post-blogs text-center mt-5">
            <h3>{props.title}</h3>
            <p className="mt-2">{props.description}</p>
            <button className="text-sm py-2 px-6 mt-4"><a href={props.link}>Read The Article</a></button>
         </div>
        
      </div>
   )
}
