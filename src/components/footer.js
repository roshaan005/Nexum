import React from 'react'
import Tag from './input'

function Footer() {
  return (
    <footer className = 'w-full flex-col flex justify-center border-t-2 border-gray-500 border- items-center h-auto blueNav'>
    <div className='w-full h-14 hidden md:block purple-text-grad flex text-center justify-center items-center pt-5 pb-5 text-xl font-bold'>NEXUM ©</div>
    <div className='md:hidden mb-6 pb-6 flex pl-3 pr-3 mt-20 flex-col text-center justify-center items-center w-full h-32 '>
        <span className="text-white  font-semibold text-3xl"><span className="text-3xl font-bold purple-text-grad">Subscribe</span > to our newsletter</span>
       
        <Tag action = {'Subscribe'}/>

    </div>
    <div className='w-full h-14 md:hidden orange-text-grad flex text-center justify-center items-center pt-5 pb-5 text-xl font-bold'>NEXUM ©</div>
    

</footer>
  )
}

export default Footer