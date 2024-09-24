import React from 'react'

export default function PropertyCard() {
   return (
      <div className='~sm/xl:~w-[20rem]/[25rem] border rounded-xl ~sm/xl:~h-[25rem]/[30rem] shadow-md bg-gray-50'>
         <div className='w-full h-full'>
            <div className='~sm/xl:~w-[19rem]/[24rem] ~sm/xl:~h-[12rem]/[14rem] border mx-auto mt-2 rounded-lg'>
               Image
            </div>
            <div className='my-1 ~sm/xl:~w-[19rem]/[24rem] border mx-auto h-auto ~text-sm/base px-1'>
               <p className='~text-xs/base'>Type</p>
               <p className='font-bold ~text-lg/2xl'>Agent</p>
            </div>
         </div>
      </div>
   )
}

