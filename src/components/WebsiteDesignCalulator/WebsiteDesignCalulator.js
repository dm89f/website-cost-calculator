import React from 'react'
import { useSelector } from 'react-redux'
import{ 
  getPages, getTotalCost, 
  getPageDesignCost, 
  getInteractionAnimCost, getOthersCost
} from '../../features/customWebsite/customWebsite'
import PageRow from './utils/PageRow';

function WebsiteDesignCalulator() {

  let pages = useSelector(getPages);
  let pageDesignCost = useSelector(getPageDesignCost)
  let interactionAnimCost = useSelector(getInteractionAnimCost)
  let othersCost = useSelector(getOthersCost)
  let totalCost = useSelector(getTotalCost)

  return (
    <section className='mt-10 w-full p-5 bg-sgreen rounded-md '>
      <table className='w-full bg-sgreen tabrow-space'>
        
        {/* website customization header */}
        <thead >
          <tr>
            <th className='py-5 border-b-4 border-black'>
              <div className='flex-col'>
                <h1 className='text-4xl'>{pages.length}</h1>
                <h2>  Pages</h2>
              </div>
            </th>
            <th className='py-5 border-b-4 border-black'>
              <h2 className='text-xl md:text-3xl'>$ {pageDesignCost}</h2>
              <span className='font-light text-sm md:text-md'>Page Design</span>
            </th>
            <th className='py-5 border-b-4 border-black'>
              <h2 className='text-xl md:text-3xl'>$ {interactionAnimCost}</h2>
              <span className='font-light text-sm md:text-md'>interactions & Animations</span>
            </th>
            <th className='py-5 border-b-4 border-black'>
              <h2 className='text-xl md:text-3xl'>$ {othersCost}</h2>
              <span className='font-light text-sm md:text-md'>CMS / Dynamic Data / Integrations</span>
            </th>
            <th className='py-5 border-b-4 w-28    border-black flex-col'>
              <span className='text-sm' >Sub Total</span>
              <h1 className='text-4xl '> $ {totalCost} </h1>
            </th>
          </tr>
        </thead>
        {/* website customization body */}
        <tbody className=''>
          <tr className=''>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Pages</span> 
                <div className='tooltip'>
                  ⓘ
                  <span className='tooltiptext'>Lorem Ipsum</span>
                </div>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center justify-center space-x-2'> 
                <span>Design</span> 
                <div className='tooltip'>
                  ⓘ
                  <span className='tooltiptext'>Lorem Ipsum</span>
                </div>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center justify-center space-x-2'> 
                <span>Interactions & Animations</span> 
                <div className='tooltip'>
                  ⓘ
                  <span className='tooltiptext text-sm'>Lorem Ipsum</span>
                </div>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center justify-center space-x-2'> 
                <span>Integration</span> 
                <div className='tooltip'>
                  ⓘ
                  <span className='tooltiptext'>Lorem Ipsum</span>
                </div>
              </div>
            </th>
            <th className='text-lg '>
              <div className='py-2   space-x-2'> 
                <span className='ml-auto'>Cost</span> 
                <div className='tooltip'>
                  ⓘ
                  <span className='tooltiptext'>Lorem Ipsum</span>
                </div>
              </div>
            </th>
          </tr>
          {
            pages&&pages.map((page,idx)=>{
              return <PageRow key={page.name} page={{ slNo:idx+1, ...page }} />
            })
          }
        </tbody>

      </table>
    </section>
  )
}

export default WebsiteDesignCalulator