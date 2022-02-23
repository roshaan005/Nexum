import React from 'react'
import Tag from '../components/input'
import TimeLine from '../components/timeline'
import illustration from "../images/space-cosmonaut-in-a-wetsuit-with-a-backpack-of-oxygen.png"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import TextCard from '../components/textCard'
import Reveal from 'react-reveal/Reveal';
import Header from '../components/header'
export default function Create() {
  return (
    

        <div>
        <section className='w-full h-auto'>
            <div className='md:ml-20 md:mt-28 mt-14 w-full md:w-10/12 md:flex-row flex flex-col justify-center items-center'>
             <Fade right><Header/></Fade>
               <img className = 'mt-12 w-10/12 h-60' src = {illustration}/>
               
            </div>
            
        </section>
        <section className='md:mt-14 md:ml-10 w-11/12 h-auto'>
            <div className="pl-5 w-10/12">
            <div className='flex flex-col md:grid md:grid-cols-2'>
            <div>
             
             <Fade left><TextCard question={'What is it like to create a course for us?'}
             text={'We believe that you should be rewarded for whatever you provide to the community. Everything that you create will solely be yours while we take a small fraction of it to keep Nexum alive.'} /></Fade>
             <Fade right><TextCard question={'What the heck are these cohorts tho?'} text={'Cohorts are like courses but better , live and more interactive. These cohorts will consist of all the people taking the same course and each course will be live and conducted only once'}/></Fade>
            <Slide left><TextCard question={'Do you need to have any prior experience in your respective field?'} text={'We really could not care less if you have any prior experience , the only thing we care about is your dedication.'}/></Slide>
            
         
         
         
               
            </div>
            <div className='md:relative md:left-40  md:flex md:justify-center md:items-center'>
            <TimeLine/>

            </div>
            
            
            </div>
            </div>

         
            


        </section>
        <section className='mb-10 md:mt-28 md:pr-5 mt-20 w-full h-auto '>
            <div className='w-full flex justify-center items-center h-auto'>
                <div className='text-center rounded-xl md:grid-cols-2 grid grid-rows-2 blue-grad h-96 md:h-56 w-10/12 md:w-9/12'>
                    
                    
                    
                    <div className='md:flex  md:justify-center md:items-center mt-5 md:h-56 pl-5 pr-5 flex flex-col'>

                        <span className='text-3xl font-semibold md:text-4xl'>Still got questions for us huh?</span>
                        <span className='mt-3 text-white md:text-lg md:mb-5'>Not to worry , we have got your back. Just leave your email address here and we will get back to you!</span>
                      </div>
                      <div className='md:h-56 flex justify-center items-center'>
                          <Tag action={'Hit it man!'}/>

                      </div>
                    

                    </div>
                   
            </div>
             
        </section>
   
</div>
  )
}

