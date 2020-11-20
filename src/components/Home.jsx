import React from 'react'
import './Home.css'
import Bar from './Bar'

export default function Home(props) {
   return (
      <header>
         <div className="container-home">
            <div className="content-home text-white">
               <h2 className="text-5xl capitalize">{props.heading}</h2>
               <h1 className="text-6xl name font-bold">{props.name}</h1>
               <Bar />
               <div className="jobs text-center mt-5 py-3">
                  <span className="job-fe">{props.firstJob} </span>
                  <span className="job-freelance"> | {props.secondJob}</span>
                  <span className="job-react"> | {props.thirdJob}</span>
               </div>
            </div>
            <span className="builtin text-sm italic">Built with React.js + TailwindCSS</span>
         </div>
      </header>
   )
}
