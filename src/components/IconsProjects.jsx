import React from 'react'


export default function IconsProject(){
   
   const Buttons =  [
      { className:"rounded-md p-2 font-bold", href:"https://github.com/DavideCannerozzi", content:"View Code" },
      { className:"rounded-md p-2 font-bold", href:"https://seteshop.it", content:"View Live" },
      { className:"", href:"https://weather-js-project.netlify.app/", content:"vd"}
   ]
   return(
      <div className="text-center"> 
         { Buttons.map( button =>( <a href={button.href} className={button.className}>{button.content}</a>))}
      </div>
   )
}