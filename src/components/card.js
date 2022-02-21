import React from 'react'
import picture from "../images/space-please-wait.png"
import spaceIllustration from "../images/space-computer-monitor-with-charts-and-graphs.png"

function Card() {
  return (
   
   
<div className="flex flex-col justify-center items-center rounded-xl bg-orange-600 w-10/12 h-auto">
                           <div> 
                               <img className="pt-5 w-40 h-32" src = {picture}/>
                            </div>
                            <span className="text-2xl text-white font-semibold">Interactivity</span>
                            <span className='pb-5 pr-5 pl-5 mt-3 text-center text-gray-500'>We're a learning DAO creating quality web3 education. Get our "12 Days of Web3" email series or start learning at your own pace.</span>
                        </div>
                       
  )
}

export default Card