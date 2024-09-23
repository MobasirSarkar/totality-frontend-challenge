import Signin from '@/components/Signin'
import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
   const session = await auth()
   if (session?.user) redirect("/main")
   return (
      <Signin />
   )
}

