import React from 'react'
import illustration from '../images/mesh-gradient (2).png'

function CourseComponent({title,header,text}) {
  return (
    
<div class="overflow-hidden shadow-lg rounded-lg h-90 w-10/12 md:w-80 cursor-pointer m-auto">
    <a href="#" class="w-full block h-full">
        <img alt="blog photo" src={illustration} class="max-h-40 w-full object-cover"/>
        <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
              {header}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {title}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                {text}
            </p>
            <div class="flex items-center mt-4">
                <a href="#" class="block relative">
                    <img alt="profil" src={illustration} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                        Coming Soon!
                    </p>
                   
                </div>
            </div>
        </div>
    </a>
</div>

  )
}

export default CourseComponent