import React from 'react'
import './Home.css'
import Bar from './Bar'

export default function Home(props) {
   return (
      <main>
         <div className="container-home mx-auto">
            <div className="content-home capitalize text-white">
               <h2 className="text-5xl">{props.presentation}</h2>
               <h1 className="text-6xl font-bold">{props.name}</h1>
               <Bar />
               <div className="jobs text-center mt-5 py-3">
                  <span className="titleOne">{props.titleOne} </span>
                  <span className="titleTwo"> | {props.titleTwo}</span>
                  <span className="titleThree"> | {props.titleThree}</span>
               </div>
               <img className="aBulldog" src={props.image} alt=""/>
            </div>
            <span className="info text-white text-sm italic">{props.info}</span>
         </div>
      </main>
   )
}
