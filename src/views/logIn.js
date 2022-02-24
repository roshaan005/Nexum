import React from 'react'
import FormLogIn from '../components/formLogIn'
import Form from '../components/formSignup'

function LogIn() {
  return (
    
    <section className='w-full h-auto'>
        <div className='mt-9 flex flex-col justify-center text-center  items-center w-full h-auto'>

        <span className='text-white text-3xl font-bold pl-3 pr-3 '>Welcome back, <span className='text-indigo-600'> Explorer!</span></span>
        <span className='text-gray-300 pt-2 pl-3 pr-3  text-lg' >We are glad to have you back!</span>
        <div className='w-11/12 bg-gray-500 h-0.5 mt-6 pl-3 pr-3'></div>


</div>
<div className='pb-14 mt-9 w-full flex justify-center items-center h-auto'>
    <FormLogIn/>

</div>


    </section>
  )
}

export default LogIn

