import React from 'react'

function PageOption({handleDec, handleInc, feature}) {

  return (
    <div className='mr-3 bg-white py-1 px-2 rounded-full text-lg flex justify-between '>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleDec(feature.name)}}
      >-</button>
      <span className='rounded-full bg-red-400 text-white px-3 py-1'>{feature.value}</span>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleInc(feature.name)}}
      >+</button>
    </div>
  )
}

export default PageOption