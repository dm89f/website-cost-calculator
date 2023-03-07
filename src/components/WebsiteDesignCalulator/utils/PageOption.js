import React from 'react'

function PageOption({handleDec, handleInc, feature}) {

  let featVal = '';

  if( feature.value === 0 ){
    featVal = 'none'
  }else if(feature.value === 1){
    featVal = 'basic';
  }else if(feature.value === 2){
    featVal = 'Advanced';
  }else if( feature.value === 3 ){
    featVal = 'Complex';

  }

  return (
    <div className='mr-3 bg-white py-1 px-2 rounded-full text-lg flex justify-between '>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleDec(feature.name)}}
      >-</button>
      <span className='rounded-full bg-red-400 text-white px-3 py-1'>{featVal}</span>
      <button 
        className='px-3 text-2xl'
        onClick={()=>{handleInc(feature.name)}}
      >+</button>
    </div>
  )
}

export default PageOption