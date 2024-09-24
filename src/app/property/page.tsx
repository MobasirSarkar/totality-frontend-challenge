import React from 'react'
import { auth } from '../../../auth'
import FallbackSignIn from '@/components/FallbackSignIn'
import Signin from '@/components/Signin'
import PropertyCard from '@/components/_shared/PropertyCard'

export default async function PropertyPage() {
   const session = await auth()
   if (!session) return <FallbackSignIn />
   return (
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-3'>
         <PropertyCard />
         <Signin />
      </div>
   )
}

