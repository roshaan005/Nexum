import React, { useState } from 'react'
import { useLocation } from 'react-router'
import StatusCard from '../components/statusCard'

function ErrorPage(props) {
    
  return (
   <section className='w-full h-screen flex justify-center items-center'>
       <StatusCard title = {'We had some problem logging you in!'} text={'please try again , We apologize for the trouble'}/>
   </section>
  )
}

export default ErrorPage