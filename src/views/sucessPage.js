import React, { useState } from 'react'
import { useLocation } from 'react-router'
import StatusCard from '../components/statusCard'

function SuccessPage(props) {
    
  return (
   <section className='w-full h-screen flex justify-center items-center'>
       <StatusCard title = {'SuccessFully logged in!'} text={'Feel free to explore around now!'}/>
   </section>
  )
}

export default SuccessPage