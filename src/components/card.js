import React from 'react'





function Card({ImageLink,color,title,text}) {
  return (
   
   
<div className={`flex flex-col justify-center items-center rounded-xl ${color} w-10/12 h-auto`}>
                           <div> 
                               <img className="pt-5 w-72 h-70" src = {ImageLink}/>
                            </div>
                            <span className="relative bottom-5 text-2xl text-white font-semibold">{title}</span>
                            <span className='relative bottom-5 pb-5 pr-5 pl-5 mt-3 text-center text-slate-100'>{text}</span>
                        </div>
                       
  )
}

export default Card