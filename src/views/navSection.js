import React from 'react'
import { Link } from 'react-router-dom'

function NavSection({display}) {
    
    
  return (
      
    <div className={`${display} transition`}>
        <div className={`grid grid-rows-4 h-56 w-full bg-red-200`}>
            <div className='pl-7 bg-black text-white flex text-lg font-semibold items-center'>
                <Link to = '/'>Home</Link>
            </div>
            <div className='pl-7 bg-black text-white flex text-lg font-semibold items-center'>
                <Link to='/create'>Create a Cohort</Link>
            </div>
            <div className='pl-7 bg-black text-white flex text-lg font-semibold items-center'>
                <Link to='/join'>Join a cohort</Link>
            </div>
            <div className='pl-7 bg-black text-white flex text-lg font-semibold items-center'>
                <Link to ='/login'>Sign up</Link>
            </div>

        </div>

    </div>
  )
}

export default NavSection