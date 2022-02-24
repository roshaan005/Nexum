import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='pl-5 pr-5 flex flex-col md:justify-center md:items-center ' >
    <span className='text-white text-3xl md:text-4xl font-bold'><span className='orange-text-grad'>Kickstart</span> your career and earn while you do so</span>
    <span className='text-gray-400 md:text-lg mt-10'>Nexum is not only a learning platform but we also highly encourage young professionals to start their journey with us while earning and supporting yourself.</span>
   <div className='flex justify-center items-center'>
   <div className="md:w-44 mt-5 mr-3 md:mr-5 md:mt-10 purple-grad md:h-12  h-10 w-36 rounded-2xl text-white font-semibold pl-2 pr-2 text-sm flex justify-center items-center"><a href='https://discord.gg/WV6WUnFy'>join the discord </a></div>
   <div className='md:w-44 mt-5 ml-3 md:ml-5 md:mt-10 md:h-12 yellow-grad  font-semibold flex items-center justify-center rounded-2xl h-10 w-36 pr-2 pl-2'> <Link to='/'>View details</Link></div>
       </div> 
</div>
  )
}

export default Header