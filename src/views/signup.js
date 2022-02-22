import React from 'react'
import Form from '../components/form'

function Signup() {
  return (
    
    <section className='w-full h-auto'>
        <div className='mt-9 flex flex-col justify-center text-center  items-center w-full h-auto'>

        <span className='text-white text-3xl font-bold pl-3 pr-3 '>Become a part of  <span className='text-indigo-600'> US!</span></span>
        <span className='text-gray-300 pt-2 pl-3 pr-3  text-lg' >You are one step away from becoming a part of our team</span>
        <div className='w-11/12 bg-gray-500 h-0.5 mt-6 pl-3 pr-3'></div>


</div>
<div className='mt-9 w-full flex justify-center items-center h-auto'>
    <Form/>

</div>


    </section>
  )
}

export default Signup

