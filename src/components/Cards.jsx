import React from 'react'
import devImage from '../images/01.png'

export default function Cards(props) {
   return (
      <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10">
            <img class="w-full" src={devImage} alt="building website" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 capitalize">{props.title}</div>
               <p class="text-gray-700 text-base">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
            </div>
            </div>
      </div>
   )
}
