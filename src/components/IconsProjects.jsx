import React from 'react'


export default function IconsProject(){
   
   const Buttons =  [
      { className:"rounded-md p-2 font-bold", href:"https://github.com/DavideCannerozzi", content:"View Code" },
      { className:"rounded-md p-2 font-bold", href:"https://github.com/DavideCannerozzi", content:"View Live" }
   ]
   return(
      <div className="mt-40 text-center"> 
         { Buttons.map( button =>( <a href={button.href} className={button.className}>{button.content}</a>))}
      </div>
   )
}