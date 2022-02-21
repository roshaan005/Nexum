import React from 'react'
import Tag from './input'

function Footer() {
  return (
    <footer className = 'w-full flex-col flex justify-center items-center h-auto bg-black'>
    <div className="md:w-10/12 md:place-items-center md:grid-cols-3  grid grid-cols-2   w-11/12 ">
        <ul className='text-white pl-5 pt-4'> <span className='text-white text-xl font-bold'>Pages</span>
            <li className='font-semibold pt-2 pb-2' >Home</li>
            <li className= 'font-semibold pb-2' >
                join Cohort</li>
            <li className='font-semibold pb-2' >Create Cohort</li>
        </ul>
        <ul className='text-white bg-black  pl-5 pt-4'> <span className='text-white text-xl font-bold'>Socials</span>
            <li className='font-semibold pt-2 pb-2' >Instagram</li>
            <li className= 'font-semibold pb-2' >
                Twitter</li>
            <li className='font-semibold pb-2' >Discord</li>
        </ul>
       <div className="hidden md:block">
       <span className="text-white  font-semibold text-3xl"><span className="text-3xl font-bold text-pink-500">Subscribe</span > to our newsletter</span>
        <Tag/>

       </div>

    </div>
    <div className='md:hidden mb-6 pb-6 flex  mt-16 flex-col text-center justify-center items-center w-full h-32 '>
        <span className="text-white  font-semibold text-3xl"><span className="text-3xl font-bold text-pink-500">Subscribe</span > to our newsletter</span>
        <Tag/>

    </div>
    

</footer>
  )
}

export default Footer