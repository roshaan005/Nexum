import React from 'react'
import Card from '../components/card'
import spaceIllustration from "../images/space-computer-monitor-with-charts-and-graphs.png"
import illustration from "../images/space-cosmonaut-in-a-wetsuit-with-a-backpack-of-oxygen.png"
import space from "../images/space-astronaut-above-the-financial-chart-clicks-on-the-arrow-pointing-up.png"
import Tag  from '../components/input'
import TimeLine from '../components/timeline'




    
   

function Home() {
  return (
    <div>
        <section className=" notranslate skiptranslate md:flex md:justify-center w-full md:h-screen h-auto">
      <div className=" gap-y-3 md:w-11/12 w-full h-full grid md:grid-cols-2 md:grid-rows-none grid-rows-2 grid-cols-1">
          <div className="md:order-2 mt-10 flex justify-center items-center">
             
              <img className = 'md:h-96 md:mb-20 mt-10 w-74 h-60' src = {spaceIllustration}/>

             
              
          </div>
          <div className="md:mt-9 flex flex-col items-center md:pl-12 md:justify-center text-center">
              <span className="md:text-5xl mt-3 font-bold text-3xl text-white">
                  Revolutionizing online education and content creation with <span className="text-pink-600">Nexum</span>
              </span>
              <span className="pb-5 pr-5 pl-5 mt-3 md:text-lg text-center text-gray-400">We believe in equality when it comes to education and with nexum we aim to provide that</span>
              <div className="btn-grad mt-10 text-center font-semibold rounded-3xl md:w-60 md:h-14 w-56 h-12 ">Join Discord</div>
          </div>

      </div>
        </section>
        <section className='pt-5 w-full md:flex md:justify-center md:items-center h-auto'>
            <div className="flex flex-col text-center md:w-10/12 h-auto">
                <span className="font-semibold text-white md:text-5xl md:mb-9 mb-5 text-3xl pl-4 pr-5">We are providing Quality <span className="text-orange-600">Online Education</span></span>
                <div className="gap-y-8 md:grid-cols-3 md:grid-rows-none md:pl-14 md:pr-14 flex grid grid-rows-3 grid-cols-1  w-full h-full mt-5">
                    <div className="w-full flex justify-center items-center h-74">
                       <Card/>
                       
                        
                    </div>
                    <div className="flex justify-center items-center w-full h-74">
                        <Card/>
                       
                        
                       </div>
                       <div className="flex justify-center items-center w-full h-74">
                           <Card/>
                       
                        
                       </div>
                      
                   
                </div>
               



            </div>
           

        </section>

        <section className='mt-5 pt-5 md:flex md:justify-center md:items-center'>
            <div className="flex md:grid md:grid-cols-2 flex-col pl-8 pr-6 md:w-10/12 h-auto">
                <div className='md:mb-14 md:flex md:justify-center md:items-center md:flex-col ' >
                        <span className="text-white text-3xl md:text-5xl  font-semibold "> Working together as a single <span className="text-yellow-400">Team</span></span>
                        <p className="mt-5 text-gray-400">In the US, two thirds of people are crypto curious. These people deserve a web3 onramp that isn’t fraught with scams and misinformation.  
        </p>
                    <p className='mt-5 text-gray-400'>We're creating quality "explain like I'm five" learning paths backed by a thriving community.</p>
                    
                        </div>
                <div className="flex md:justify-center md:items-center flex-col" >
                
                    <img className='mt-14 md:h-4/5 md:w-3/4 relative bottom-7' src = {space}/>

                </div>
                
               
            </div>

            
            
        </section>

        <section className='mt-10 pt-5 md:flex md:justify-center md:items-center'>
            <div className="flex md:grid md:grid-cols-2 flex-col pl-8 pr-6 md:w-10/12 h-auto">
                <div className='md:order-2 md:mb-14 md:flex md:justify-center md:items-center md:flex-col ' >
                        <span className="text-white text-3xl md:text-5xl  font-semibold "> Working together as a single <span className="text-yellow-400">Team</span></span>
                        <p className="mt-5 text-gray-400 md:text-lg">In the US, two thirds of people are crypto curious. These people deserve a web3 onramp that isn’t fraught with scams and misinformation.  
        </p>
                    <p className='mt-5 text-gray-400 md:text-lg'>We're creating quality "explain like I'm five" learning paths backed by a thriving community.</p>
                    
                        </div>
                <div className="flex justify-center items-center flex-col" >
                
                    <img className='mt-14 md:h-4/5 md:w-3/4 relative bottom-7' src = {space}/>

                </div>
                
               
            </div>

            
            
        </section>

       

    </div>
  )
}

export default Home