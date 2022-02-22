import React from 'react'

function Header() {
  return (
    <div className='pl-5 pr-5 flex flex-col md:justify-center md:items-center ' >
    <span className='text-white text-3xl md:text-4xl font-bold'>Kickstart your career and earn while you do so</span>
    <span className='text-gray-400 md:text-lg mt-10'>The MLH Fellowship is a 12 week internship alternative for aspiring software engineers. Fellows on the Software Engineering track experience what it's like to collaborate in a small group on a real project from one of our corporate or government partners.</span>
   <div className='flex justify-center items-center'>
   <div className="md:w-44 mt-5 mr-3 md:mr-5 md:mt-10 bg-yellow-400 md:h-12  h-10 w-36 rounded-2xl text-white font-semibold pl-2 pr-2 text-sm flex justify-center items-center">join the discord </div>
   <div className='md:w-44 mt-5 ml-3 md:ml-5 md:mt-10 md:h-12  bg-yellow-100 font-semibold flex items-center justify-center rounded-2xl h-10 w-36 pr-2 pl-2'> View details</div>
       </div> 
</div>
  )
}

export default Header