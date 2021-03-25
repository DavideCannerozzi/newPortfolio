import React from 'react'
import SingleProject from './SingleProject'
import Bar from './Bar'
import WeatherApp from '../images/weather-app-js.jpg'

export default function Projects(props) {

   const Projects = [
      { image:WeatherApp, title:'SeteShop', content:'Website for a client, made using Wordpress and ecc. ecc.'},
      { image:WeatherApp, title:'ToDoList App', content:'Simple To-do List made with Javascript. You can add and remove items inside your to-do app"'},
      { image:WeatherApp, title:'ToDoList App', content:'Simple To-do List made with Javascript. You can add and remove items inside your to-do app"'}
   ]
   
   return (
      <div className="text-center absolute w-full">
         <h2 className="text-4xl p-2">{props.header}</h2>
         <p>{props.subHeader}</p>
         <Bar />
         <div>
           { Projects.map( project =>(<SingleProject image={project.image} title={project.title} content={project.content} />)  )}
         </div>
      </div>
   )
}
