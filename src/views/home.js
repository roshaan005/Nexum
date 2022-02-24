import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/card'
import spaceIllustration from "../images/sticker.png"
import illustration from "../images/float.png"
import space from "../images/homePage.png"
import Tag  from '../components/input'
import TimeLine from '../components/timeline'
import cardImage1 from '../images/computer.png'
import everyOne from '../images/everyoneIllustration.png'
import chubbyGuy from '../images/chubbyGUy.png'
import Fade from "react-reveal/Fade"
import remoteControl from '../images/remote.png'

    
   

function Home() {
  return (
    <div>
        <section className=" notranslate skiptranslate md:flex md:justify-center w-full md:h-screen h-auto">
      <div className=" gap-y-3 md:w-11/12 w-full h-full grid md:grid-cols-2 md:grid-rows-none grid-rows-2 grid-cols-1">
          <div className="md:order-2 mt-10 flex justify-center items-center">
             
              <img className = 'md:h-96 md:mb-20 mt-10 w-10/11 h-96' src = {spaceIllustration}/>

             
              
          </div>
          <div className="md:mt-9 flex flex-col items-center md:pl-12 md:justify-center text-center">
              <span className="md:text-5xl mt-3 font-bold text-3xl text-white">
                  Revolutionizing online education and content creation with <span className="text-grad">Nexum</span>
              </span>
              <span className="pb-5 pr-5 pl-5 mt-3 md:text-lg text-center text-gray-400">We strongly believe that you should be given access to learning that you actually look forward to!</span>
              <div className="btn-grad mt-10 text-center flex justify-center items-center font-semibold rounded-3xl md:w-60 md:h-14 w-56 h-12 ">
                  <a href = "https://discord.gg/WV6WUnFy"> Join Discord</a>
                  </div>
          </div>

      </div>
        </section>
        <section className='w-full md:flex md:justify-center md:items-center h-auto'>
            <div className="flex flex-col text-center md:w-10/12 h-auto">
                <span className="font-semibold text-white md:text-5xl md:mb-9 mb-5 text-3xl pl-4 pr-5">Learn. Create. <span className="text-grad">Grow</span></span>
                <div className="gap-y-8 md:grid-cols-3 md:grid-rows-none md:pl-14 md:pr-14 flex grid grid-rows-3 grid-cols-1  w-full h-auto mt-5">
                    <div className="w-full flex justify-center items-center h-74">
                       <Card color = {'yellow-grad'} ImageLink={cardImage1} title={'Interactivity'} text={'Conducting interactive classes is one of the biggest aims of Nexum. I swear you will not yawn outta boredom!'}/>
                       
                        
                    </div>
                    <div className="flex justify-center items-center w-full h-74">
                       <Card color = {'purple-grad'} ImageLink={space} title={'Accessbility'} text={'Learning should not be acessible to a certain group or class of people. Nexum is for EVERYONE!'}/> 
                       
                        
                       </div>
                       <div className="flex justify-center items-center w-full h-74">
                           <Card color = {'blue-grad'} ImageLink={illustration} title={'Creativity'} text={'We encourage creativity with all its colors. Whether you are a chess guru or an avid writer, We want you in our team!'}/>
                       
                        
                       </div>
                      
                   
                </div>
               



            </div>
           

        </section>

        <section className='mt-20 pt-5 md:flex md:justify-center md:items-center'>
            <div className="flex md:grid md:grid-cols-2 flex-col pl-8 pr-6 md:w-10/12 h-auto">
                <div className='md:mb-14 md:flex md:justify-center md:items-center md:flex-col ' >
                        <span className="text-white text-3xl md:text-5xl  font-semibold "> Connection is <span className="purple-text-grad">ESSENTIAL</span></span>
                      <Fade left>  <p className="mt-5 text-gray-400">Ever Since the pandemic has started, We have experienced a loss of connection despite being surrounded by technology.
        </p>  </Fade> 
                    <Fade right><p className='mt-5 text-gray-400'>We want you to join us on our mission and bridge the gap the right way!</p></Fade>
                    
                        </div>
                <div className="flex md:justify-center md:items-center flex-col" >
                
                   <Fade left> <img className='mt-14   md:h-4/5 md:w-3/4 relative bottom-7' src = {chubbyGuy}/></Fade>

                </div>
                
               
            </div>

            
            
        </section>

        <section className='mt-10 pt-5 md:flex md:justify-center md:items-center'>
            <div className="flex md:grid md:grid-cols-2 flex-col pl-8 pr-6 md:w-10/12 h-auto">
                <div className='md:order-2 md:mb-14 md:flex md:justify-center md:items-center md:flex-col ' >
                        <span className="text-white text-3xl md:text-5xl  font-semibold "> Inventing the <span className="orange-text-grad">wheel the right way</span></span>
                        <p className="mt-5 text-gray-400 md:text-lg">It might seem like working on an online learning platform is like reinventing the wheel but trust me this time.. 
        </p>
                    <p className='mt-5 text-gray-400 md:text-lg'>We really plan to reinvent that freaking wheel the CORRECT way.</p>
                    
                        </div>
                <div className="flex justify-center items-center flex-col" >
                
                    <img className='mt-14 md:h-4/5 md:w-3/4 relative bottom-7' src = {everyOne}/>

                </div>
                
               
            </div>

            
            
        </section>

       

    </div>
  )
}

export default Home