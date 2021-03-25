import React from 'react'

export default function ProfilePicture(props){
   return(
      <div className="mt-12">
         <img src={props.href} className="h-50 w-50 rounded-full shadow-xl" alt={props.alt} />
      </div>
   )
}