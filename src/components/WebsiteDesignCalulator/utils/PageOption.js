import React from 'react'

function PageOption({handleDec, handleInc, feature}) {

  let featVal = '';
  let bgColor=''
  if( feature.value === 0 ){
    featVal = 'none'
    bgColor = 'bg-gray-400'
  }else if(feature.value === 1){
    featVal = 'basic';
    bgColor = 'bg-green-400'

  }else if(feature.value === 2){
    featVal = 'Advanced';
    bgColor = 'bg-yellow-400'

  }else if( feature.value === 3 ){
    featVal = 'Complex';
    bgColor = 'bg-red-400'
  }

  return (
    <div className='mr-3 bg-white py-1 px-2 rounded-full text-lg flex justify-between '>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleDec(feature.name)}}
      >-</button>
      <span className={` transition rounded-full ${bgColor} text-white px-3 py-1`}>{featVal}</span>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleInc(feature.name)}}
      >+</button>
    </div>
  )
}

export default PageOption