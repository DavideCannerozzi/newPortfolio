import React from 'react'

export default function SinglePost(props) {
   return (
         <div className="text-center mt-5 capitalize">
            <span className="underline">{props.category}</span>
            <p className="mt-4 text-lg">{props.description}</p>
            <button className="text-sm py-2 px-6 mt-4"><a href={props.link} target="_blank" rel="noopener noreferrer">Read The Article</a></button>
         </div>
   )
}
