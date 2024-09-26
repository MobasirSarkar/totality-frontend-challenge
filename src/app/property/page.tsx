import React from 'react'
import { auth } from '../../../auth'
import { propertyData } from "../api/data/data.json"
import FallbackSignIn from '@/components/FallbackSignIn'
import { PropertyCard } from '@/components/_shared/PropertyCard'

export default async function PropertyPage() {
   const session = await auth()
   if (!session) return <FallbackSignIn />
   console.log(session.user?.email)
   return (
      <div className='h-full bg-gray-50 max-w-[90rem] mx-auto'>
         <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-1 transition-all duration-75'>
            {propertyData.map((property) => (
               <PropertyCard key={property.id} property={property} />
            ))}
         </div>
      </div>
   )
}
