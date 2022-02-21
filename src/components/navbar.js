import React from 'react'

function Navbar() {
  return (
    <div class="border-b border-gray-600 border-solid w-full  container mx-auto px-6 flex items-center justify-between">
    <div class="text-white  uppercase text-gray-800 dark:text-white font-black text-3xl">
        Nexum
    </div>
    <div class="mt-4 flex items-center">
        <nav class="font-sen text-gray-800 text-white uppercase text-lg lg:flex items-center hidden">
            <a href="/" class="py-2 px-6 flex">
                Home
            </a>
            <a href="/create" class="py-2 px-6 flex">
                Create a cohort
            </a>
            <a href="#" class="py-2 px-6 flex">
                Join a cohort
            </a>
            <a href="#" class="py-2 px-6 flex">
                Sign Up
            </a>
            
        </nav>
        <button class="lg:hidden flex flex-col ml-4">
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
            </span>
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
            </span>
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
            </span>
        </button>
    </div>
</div>
  )
}

export default Navbar