import React from 'react'
import PageOption from './PageOption'

function PageRow({page}) {



  return (
    <tr className='mt-5'>
      <td className=''>
        <p className='py-2'>
          <span className='mr-2 font-bold'>{page.slNo}.</span>
          <span >{page.name}</span>
        </p>
      </td>
      <td>
        <PageOption design={page.Design} />
      </td>
      <td>
        {page.interactAnim}
      </td>
      <td>
        {page.integration}
      </td>
      <td>$ 200</td>
    </tr>
  )
}

export default PageRow