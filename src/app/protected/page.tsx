import React from 'react'
import { auth } from '../../../auth'
import Signin from '@/components/Signin'

export default async function IndexPage() {
   const session = await auth()
   if (!session) {
      return <div>
         You are Not Authenticated.
         <Signin />
      </div>
   }
   return (
      <div>
         {session.user?.email}
      </div>
   )
}

