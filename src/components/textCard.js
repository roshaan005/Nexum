import React from 'react'

function TextCard({question,text}) {
  return (
    <div className='mt-10 md:pl-20 md:pr-20 pr-3 pl-7  flex flex-col'>
                <span className='mt-6 text-2xl text-white font-semibold'>{question}</span>
                <span className='mt-3 text-gray-500'>{text}
                </span>

                </div>
  )
}

export default TextCard