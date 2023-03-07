import React from 'react'
import { useSelector } from 'react-redux'
import{ getPages } from '../../features/customWebsite'
import PageRow from './utils/PageRow';

function WebsiteDesignCalulator() {

  let pages = useSelector(getPages);


  return (
    <section className='mt-10 w-full p-5 bg-sgreen rounded-md'>
      <table className='w-full'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='py-5'>
              <div className='flex-col'>
                <h1 className='text-4xl'>5</h1>
                <h2>  Pages</h2>
              </div>
            </th>
            <th className='py-5'>
              <h2 className='text-xl md:text-3xl'>$300</h2>
              <span className='font-light text-sm md:text-md'>Page Design</span>
            </th>
            <th className='py-5'>
              <h2 className='text-xl md:text-3xl'>$200</h2>
              <span className='font-light text-sm md:text-md'>interactions & Animations</span>
            </th>
            <th className='py-5'>
              <h2 className='text-xl md:text-3xl'>$300</h2>
              <span className='font-light text-sm md:text-md'>CMS / Dynamic Data / Integrations</span>
            </th>
            <th className='py-5 flex-col'>
              <span className='text-sm' >Sub Total</span>
              <h1 className='text-4xl'> $800 </h1>
            </th>
          </tr>
        </thead>

        <tbody className=''>
          <tr className=''>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Pages</span> <span className=''>ⓘ</span>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Design</span> <span className=''>ⓘ</span>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Interactions & Animations</span> <span className=''>ⓘ</span>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Integration</span> <span className=''>ⓘ</span>
              </div>
            </th>
            <th className='text-lg'>
              <div className='py-2 flex item-center  space-x-2'> 
                <span>Cost</span> <span className=''>ⓘ</span>
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