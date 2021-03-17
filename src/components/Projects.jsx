import React from 'react'
import SingleProject from './SingleProject'
import Bar from './Bar'
import PhotoWebsite from '../images/photo-website-vuejs.jpg'
import WeatherApp from '../images/weather-app-js.jpg'

export default function Projects(props) {

   const Projects = [
      { image:'PhotoWebsite', title:'SeteShop', content:'Website for a client, made using Wordpress and ecc. ecc.'},
      { image: 'ToDoList', title:'ToDoList App', content:'Simple To-do List made with Javascript. You can add and remove items inside your to-do app"'},
      { image: 'ToDoList', title:'ToDoList App', content:'Simple To-do List made with Javascript. You can add and remove items inside your to-do app"'}
   ]
   
   return (
      <div className="w-4/5 mx-auto absolute w-full">
         <h2 className="text-center text-4xl p-2">{props.header}</h2>
         <p className="text-center">{props.subHeader}</p>
         <Bar />
         <div>
           { Projects.map( project =>(<SingleProject image={Projects.image} title={Projects.title} content={Projects.content} />)  )}
         </div>
      </div>
   )
}
