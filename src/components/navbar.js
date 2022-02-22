import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import NavSection from '../views/navSection'

function Navbar() {
const [toggleDisplay,setDisplay] = useState('hidden');

 const changeDisplay=()=>{
     if (toggleDisplay=='hidden'){
         setDisplay('block')

         
     }else if (toggleDisplay=='block'){
         setDisplay('hidden')
     }
    }

  return (
      <>
    <div class="border-b border-gray-600 border-solid w-full  container mx-auto px-6 flex items-center justify-between">
    <div class="text-white  uppercase  dark:text-white font-black text-3xl">
        Nexum
    </div>
    <div class="mt-4 flex items-center">
        <nav class="font-sen text-white uppercase text-lg lg:flex items-center hidden">
            <Link to="/" class="py-2 px-6 flex">
                Home
            </Link>
            <Link to="/create" class="py-2 px-6 flex">
                Create a cohort
            </Link>
            <Link to="/join" class="py-2 px-6 flex">
                Join a cohort
            </Link>
            <Link to="login" class="py-2 px-6 flex">
                Sign Up
            </Link>
            
        </nav>
        <button onClick={changeDisplay} class="lg:hidden mb-5 flex flex-col ml-4">
            <span class="w-6 h-1 bg-white dark:bg-white mb-1">
            </span>
            <span class="w-6 h-1 bg-white dark:bg-white mb-1">
            </span>
            <span class="w-6 h-1 bg-white dark:bg-white mb-1">
            </span>
        </button>
    </div>
</div>
<NavSection display={toggleDisplay}/>
</>
  )
}

export default Navbar