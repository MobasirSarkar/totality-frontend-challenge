import { useRouter } from 'next/navigation'
import React from 'react'
import Signin from './Signin'

export default function FallbackSignIn() {
   return (
      <div className='w-screen h-screen flex items-center justify-center text-2xl font-bold flex-col gap-4'>
         <p>Oops! You are not Authenticated</p>
         <Signin />
      </div>
   )
}

