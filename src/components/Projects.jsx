import React from 'react'
import SingleProject from './SingleProject'
import './Project.css'
import Bar from './Bar'
import TemplateVue from '../images/template-vue.jpg'
import MachwerkImg from '../images/machwerk-berlin.jpg'
import SeteShopImg from '../images/sete-shop.jpg'

export default function Projects(props) {

   const Projects = [
      { image:SeteShopImg, title:'SeteShop', content:'Website for a client, made using Wordpress and ecc. ecc.',skills:'Wordpress, CSS3, Javascript', alt:"seteShop"},
      { image:MachwerkImg, title:'ToDoList App', content:'ciao', skills:'React.js, Tailwind.css, GraphQL,ContentfulCMS '},
      { image:TemplateVue, title:'ToDoList App', content:'ciao"'},
      { image:TemplateVue, title:'A Simple Photography Template'}
   ]
   
   return (
      <div className="text-center absolute w-full">
         <h2 className="text-4xl p-2">{props.header}</h2>
         <p className="text-2xl">{props.subHeader}</p> 
         <div className="mt-10">
            <a className="capitalize rounded-full border-2 py-2 px-6" href="https://github.com/DavideCannerozzi" target="_blank" rel="noreferrer"><i class="fab fa-github mr-2"></i>{props.btnGithub}</a>
         </div>
         <Bar />
         <div className="project-container p-8">
           { Projects.map( project =>(<SingleProject image={project.image} title={project.title} content={project.content} skill={project.skills} alt={props.alt}/>)  )}
         </div>
        
      </div>
   )
}
