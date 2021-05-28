import React from 'react'
import SingleProject from './SingleProject'
import './Project.css'
import Bar from './Bar'
import MachwerkImg from '../images/machwerk-berlin.jpg'
import SeteShopImg from '../images/sete-shop.jpg'
import VueTemplateImg from '../images/vue-template.jpg'
import WeatherAppImg from '../images/weather-app.jpg'
import JewelryTemplateImg from '../images/jewelry-template.jpg'
import PongImg from '../images/pong-img.jpg'
import ContactFormImg from '../images/contact-form.jpg'

export default function Projects(props) {

   const Projects = [
      { image:SeteShopImg, title:'Freelance Client | SeteShop', content:'An E-commerce for a client based in Italy', alt:"seteShop", skills:'Wordpress | Javascript | CSS3', website:"https://www.seteshop.it/"},
      { image:MachwerkImg, title:'Machwerk Website Berlin,Germany', content:'Machwerk Is A Website', skills:'React.js | GraphQL | TailwindCss | ContentfulCMS', website:"https://machwerk.berlin/de/"},
      { image:VueTemplateImg, title:'A Template For Photographers', content:'A Simple And Clean Template For Photographers', skills:'Vue.js | Vuetify', website:"https://photo-portfolio-vue.netlify.app/", code:"https://github.com/DavideCannerozzi/PhotoPortfolio"},
      { image:PongImg, title:'Pong Game Python', content:'The famous Pong game made with Python and Turtle.py ', skills:'Python', code:"https://github.com/DavideCannerozzi/PongGame"},
      { image:JewelryTemplateImg, title:'jewelry Template', content:'A Clean Template For Your Jewelry Shop', skills:'Bootstrap 4 | SASS', code:'https://github.com/DavideCannerozzi/Jewelry-Template'},
      { image:ContactFormImg, title: 'Contact Form', content:'A Contact Form Validation Using Javascript', skills:'Html | Css | Javascript', website:"https://contact-form-js-validation.netlify.app/", code:"https://github.com/DavideCannerozzi/Contact-Form"},
      { image:WeatherAppImg, title:'Weather App', content:"A Weather App showing the weather based on your location", skills:"Javascript | Geolocation API" ,website:"https://weather-js-project.netlify.app/",code:"https://github.com/DavideCannerozzi/Weather-App"}
   ]
   
   return (
      <div className="text-center absolute w-full">
         <h2 className="text-4xl p-2">{props.header}</h2>
         <p>{props.subHeader}</p> 
         <a className="block w-1/4 mx-auto capitalize rounded-full border-2 py-2 mt-6" href="https://github.com/DavideCannerozzi" target="_blank" rel="noreferrer"><i class="fab fa-github mr-2"></i>{props.btnGithub}</a>
         <Bar />
         <div className="project-container p-8">
           { Projects.map( project =>(<SingleProject image={project.image} title={project.title} content={project.content} skill={project.skills} alt={props.alt} linkWeb={project.website} code={project.code}/> )  )}
         </div>
      </div>
   )
}
