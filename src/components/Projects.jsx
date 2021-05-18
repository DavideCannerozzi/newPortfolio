import React from 'react'
import SingleProject from './SingleProject'
import './Project.css'
import Bar from './Bar'
import MachwerkImg from '../images/machwerk-berlin.jpg'
import SeteShopImg from '../images/sete-shop.jpg'
import VueTemplateImg from '../images/vue-template.jpg'
import WeatherAppImg from '../images/weather-app.jpg'
import PongImg from '../images/pong-img.jpg'
import ContactFormImg from '../images/contact-form.jpg'

export default function Projects(props) {

   const Projects = [
      { image:SeteShopImg, title:'SeteShop', content:'SeteShop is an e-commerce website built for one of my client.', alt:"seteShop", skills:'Wordpress, Javascript, CSS3', website:"https://www.seteshop.it/"},
      { image:MachwerkImg, title:'ToDoList App', content:'Machwerk Is A Website', skills:'React.js GraphQL TailwindCss ContentfulCMS'},
      { image:VueTemplateImg, title:'A Template For Photographers', content:'A Simple And Clean Template For Photographers', skills:'Vue.js Vuetify', website:"https://photo-portfolio-vue.netlify.app/"},
      { image:PongImg, title:'Pong Game Python', content:'Game', skills:'Python'},
      { image:VueTemplateImg, title:'jewelry Template', content:'A Clean Template for your jewelry shop', skills:'Bootstrap 4'},
      { image:ContactFormImg, title: 'Contact Form', content:'Contact form', skills:'Html Css Javascript', website:"https://contact-form-js-validation.netlify.app/"},
      { image:WeatherAppImg, title:'Weather App', website:"https://weather-js-project.netlify.app/"}
   ]
   
   return (
      <div className="text-center absolute w-full">
         <h2 className="text-4xl p-2">{props.header}</h2>
         <p>{props.subHeader}</p> 
         <div className="mt-6">
            <a className="capitalize rounded-full border-2 py-2 px-6" href="https://github.com/DavideCannerozzi" target="_blank" rel="noreferrer"><i class="fab fa-github mr-2"></i>{props.btnGithub}</a>
         </div>
         <Bar />
         <div className="project-container p-8">
           { Projects.map( project =>(<SingleProject image={project.image} title={project.title} content={project.content} skill={project.skills} alt={props.alt} linkWeb={project.website}/> )  )}
         </div>
      </div>
   )
}
