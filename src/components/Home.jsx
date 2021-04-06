import React from 'react'
import './Home.css'
import Bar from './Bar'

export default function Home(props) {
   return (
      <div className="home-page absolute w-full">
         <div className="container-home mx-auto">
            <div className="md:w-8/12 md:mt-20 mt-16 mx-auto capitalize text-white">
               <h2 className="md:text-5xl text-3xl mt-5">{props.presentation}</h2>
               <h1 className="md:text-6xl text-4xl mt-5 font-bold">{props.name}</h1>
               <Bar />
               <div className="jobs md:text-center mt-5 py-3">
                  <span className="titleOne">{props.jobOne} </span>
                  <span className="titleTwo"> | {props.jobTwo}</span>
                  <span className="titleThree"> | {props.jobThree}</span>
               </div>
               <img className="aBulldog" src={props.image} alt=""/>
            </div>
            <span className="info border-2 text-white text-sm italic">{props.info}</span>
         </div>
      </div>
   )
}
