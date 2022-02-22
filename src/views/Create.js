import React from 'react'
import Tag from '../components/input'
import TimeLine from '../components/timeline'
import illustration from "../images/space-cosmonaut-in-a-wetsuit-with-a-backpack-of-oxygen.png"

export default function Create() {
  return (
    

        <div>
        <section className='w-full h-auto'>
            <div className='md:ml-20 md:mt-28 mt-14 w-full md:w-10/12 md:flex-row flex flex-col justify-center items-center'>
               <div className='pl-5 pr-5 flex flex-col md:justify-center md:items-center ' >
                   <span className='text-white text-3xl md:text-4xl font-bold'>Kickstart your career and earn while you do so</span>
                   <span className='text-gray-400 md:text-lg mt-10'>The MLH Fellowship is a 12 week internship alternative for aspiring software engineers. Fellows on the Software Engineering track experience what it's like to collaborate in a small group on a real project from one of our corporate or government partners.</span>
                  <div className='flex justify-center items-center'>
                  <div className="md:w-44 mt-5 mr-3 md:mr-5 md:mt-10 bg-yellow-400 md:h-12  h-10 w-36 rounded-2xl text-white font-semibold pl-2 pr-2 text-sm flex justify-center items-center">join the discord </div>
                  <div className='md:w-44 mt-5 ml-3 md:ml-5 md:mt-10 md:h-12  bg-yellow-100 font-semibold flex items-center justify-center rounded-2xl h-10 w-36 pr-2 pl-2'> View details</div>
                      </div> 
               </div>
               <img className = 'mt-12 w-10/12 h-60' src = {illustration}/>
               
            </div>
            
        </section>
        <section className='md:mt-14 md:ml-10 w-11/12 h-auto'>
            <div className="pl-5 w-10/12">
            <div className='flex flex-col md:grid md:grid-cols-2'>
                <div>
                <div className='mt-10 md:pl-20 md:pr-20 pr-3 pl-7  flex flex-col'>
                <span className='mt-6 text-2xl text-white font-semibold'>Wanna know what it is like to create a course for us?</span>
                <span className='mt-3 text-gray-500'>The MLH Fellowship runs year-round with batches starting every few months. We offer scheduling options that accommodate most major time zones.

</span>

                </div>
                <div className='mt-10 md:pl-20 md:pr-20 pr-3 pl-7 flex flex-col'>
                <span className='mt-6 text-2xl text-white font-semibold'>Wanna know what it is like to create a course for us?</span>
                <span className='mt-3 text-gray-500'>The MLH Fellowship runs year-round with batches starting every few months. We offer scheduling options that accommodate most major time zones.

</span>

                </div>
                <div className='mt-10 md:pl-20 md:pr-20 pr-3 pl-7 flex flex-col'>
                <span className='mt-6 text-2xl text-white font-semibold'>Wanna know what it is like to create a course for us?</span>
                <span className='mt-3 text-gray-500'>The MLH Fellowship runs year-round with batches starting every few months. We offer scheduling options that accommodate most major time zones.

</span>

                </div>
         
               
            </div>
            <div className='md:relative md:left-40  md:flex md:justify-center md:items-center'>
            <TimeLine/>

            </div>
            
            
            </div>
            </div>

         
            


        </section>
        <section className='mb-10 md:mt-28 md:pr-5 mt-20 w-full h-auto '>
            <div className='w-full flex justify-center items-center h-auto'>
                <div className='text-center rounded-xl md:grid-cols-2 grid grid-rows-2 btn-gradc h-96 md:h-56 w-10/12 md:w-9/12'>
                    
                    
                    
                    <div className='md:flex  md:justify-center md:items-center mt-5 md:h-56 pl-5 pr-5 flex flex-col'>

                        <span className='text-3xl font-semibold md:text-4xl'>Still got questions for us huh?</span>
                        <span className='mt-3 text-white md:text-lg md:mb-5'>Not to worry , we have got your back. Just leave your email address here and we will get back to you!</span>
                      </div>
                      <div className='md:h-56 flex justify-center items-center'>
                          <Tag/>

                      </div>
                    

                    </div>
                   
            </div>
             
        </section>
   
</div>
  )
}

