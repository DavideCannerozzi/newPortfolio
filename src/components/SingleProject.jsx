import React from 'react'
import './SingleProject.css'


export default function SingleProject(props){
   return(
      <div className="project-description sm:flex block mt-8">
            <div className="project-img w-full">
                  <img src={props.image} alt={props.alt}/>
            </div>
            <div className="project-description_p mt-14 w-full shadow-xl p-4">
                  <h3 className="underline text-lg">{props.title}</h3>
                  <p className="mt-6">{props.content}</p>
                  <span className="inline-block mt-8 mb-10">{props.skill}</span>
                  <div className="btn-projects">
                        <button className="p-4 mr-12"><a href={props.linkWeb} target="_blank" rel="noreferrer">Live Project</a></button>
                        <button className="p-4"><a href={props.linkWeb} target="_blank" rel="noreferrer">View Code</a></button>
                  </div>
                 
            </div>
      </div>
      )
}