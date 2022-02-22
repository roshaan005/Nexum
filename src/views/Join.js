import React from 'react'
import CourseComponent from '../components/coursesComponent'
import NavSection from './navSection'

function Join() {
  return (
      <>
    <section className='mb-10 w-full h-auto'>
    

        <div className='flex flex-col justify-center items-center'>

        <div className='mt-9 flex flex-col justify-center text-center  items-center w-full h-auto'>

            <span className='text-white text-3xl font-bold pl-3 pr-3 '>Start your <span className='text-indigo-600'> Journey</span> Here!</span>
            <span className='text-gray-300 pt-2 pl-3 pr-3  text-lg' >We have planned alot of stuff for you, Stay tuned!</span>
            <div className='w-11/12 bg-gray-500 h-0.5 mt-6 pl-3 pr-3'></div>
        

        </div>
        <div className='md:grid-rows-none md:grid-cols-3 sm:w-auto md:grid-gap-9 sm:grid-cols-3 sm:grid-rows-none  w-full mt-9 md:gap-x-5 md:w-10/12 gap-y-5 h-auto grid grid-rows-3'>
            <CourseComponent/>
            <CourseComponent/>
            <CourseComponent/>

        </div>
        
        </div>
  
   
    </section>
     
     </>
  )
}

export default Join