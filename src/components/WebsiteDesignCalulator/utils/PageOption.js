import React from 'react'

function PageOption({design}) {

  return (
    <div className='mr-3 bg-white py-1 px-2 rounded-full text-lg flex justify-between '>
      <button className='px-3 text-2xl'>-</button>
      <span className='rounded-full bg-red-400 text-white px-3 py-1'>{design}</span>
      <button className='px-3 text-2xl'>+</button>
    </div>
  )
}

export default PageOption