import React from 'react'
import PageOption from './PageOption'
import { useDispatch, useSelector } from 'react-redux'
import { incrementPageFunc, decrementPageFunc, getPageCost } from '../../../features/customWebsite/customWebsite'

function PageRow({page}) {

  let dispatch = useDispatch();
  let pageCost = useSelector( (state)=>(getPageCost(state, page.name)) );

  function handleInc(feature){
    // console.log( 'incrementing',page.name, feature )
    dispatch(incrementPageFunc({pageName:page.name, feature}))
  }

  function handleDec(feature){
    // console.log( 'decrementing',page.name, feature )
    dispatch(decrementPageFunc({pageName:page.name, feature}))

  }


  return (
    <tr className='mt-5'>
      <td className=''>
        <p className='py-2'>
          <span className='mr-2 font-bold'>{page.slNo}.</span>
          <span >{page.name}</span>
        </p>
      </td>
      <td>
        <PageOption 
          feature={{name:'Design', value:page.Design}} 
          handleDec={handleDec} handleInc={handleInc} 
        />
      </td>
      <td>
        <PageOption 
          feature={{name:'interactAnim', value:page.interactAnim}} 
          handleDec={handleDec} handleInc={handleInc} 
        />
      </td>
      <td>
        <PageOption 
          feature={{name:'integration', value:page.integration}} 
          handleDec={handleDec} handleInc={handleInc} 
        />
      </td>
      <td>$ {pageCost}</td>
    </tr>
  )
}

export default PageRow