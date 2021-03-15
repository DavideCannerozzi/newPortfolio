import React from 'react'
import './Projects.css'
import SingleProject from './SingleProject'
import Bar from './Bar'
import ScrollArrow from './ScrollArrow'
import PhotoWebsite from '../images/photo-website-vuejs.jpg'
import ToDoList from '../images/to-do-list-js.jpg'
import WeatherApp from '../images/weather-app-js.jpg'

export default function Projects(props) {
   return (
      <div className="projects-container">
         <h2 className="text-center text-4xl p-2">{props.header}</h2>
         <p className="text-center">{props.subHeader}</p>
         <Bar />
         <div className="grid grid-cols">
            <SingleProject image={PhotoWebsite} title="SeteShop" content="Website for a client, made using Wordpress and customized with CSS and Javascript"/>
            <SingleProject image={PhotoWebsite} title="Template for" content="Template made with HTML SASS Bootstrap4" />
            <SingleProject image={PhotoWebsite} title="One" content="First Single PRoject"/>
            <Bar />
            <SingleProject image={PhotoWebsite} title="Two" content="Second Single PRoject"/>
            <SingleProject image={PhotoWebsite} title="Photography Website" content="Template made with Vue.js and Vuetify.This template can be used for your Photography website"/>
            <SingleProject image={PhotoWebsite} title="Photography Website" content="Template made with Vue.js and Vuetify.This template can be used for your Photography website"/>
            <SingleProject image={ToDoList} title="To-Do List App" content="Simple To-do List made with Javascript. You can add and remove items inside your to-do app"/>
            <SingleProject image={WeatherApp} title="Weather App" content="Geolocation Weather App built with Javascript,using the Geolocation function. It will return the weather based on your current location"/>
         </div>
         <ScrollArrow />
      </div>
   )
}
