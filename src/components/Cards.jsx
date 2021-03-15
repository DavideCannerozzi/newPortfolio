import React from 'react'


export default function Cards(props) {
   return (
         <div className="max-w-sm rounded overflow-hidden text-center shadow-lg m-10">
         <img className="w-16 mx-auto" src={props.image} alt="" />
         <div className="px-6 py-4">
            <div className="mb-2">
               <h3 className="text-green-400 text-lg font-bold">{props.title}</h3>
               <p className="text-sm mt-4">{props.content}</p>
            </div>
         </div>
         </div>
   )
}
