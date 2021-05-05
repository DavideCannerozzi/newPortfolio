import React from 'react'

export default function SinglePost(props) {
   return (
         <div className="text-center mt-5 p-4 capitalize">
            <i class={props.icon}></i>
            <p className="underline">{props.category}</p>
            <p className="mt-4 text-lg">{props.description}</p>
            <button className="btn-blog transition duration-500 text-sm py-2 px-6 mt-4"><a href={props.link} target="_blank" rel="noopener noreferrer">Read The Article</a></button>
         </div>
   )
}
