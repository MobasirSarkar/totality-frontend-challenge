import React from 'react'
import { auth, signIn, signOut } from '../../auth'
import { Button } from './ui/button'

export default async function Signin() {
   const session = await auth()
   const user = session?.user
   return (
      <div>
         {
            user ?
               <form
                  action={
                     async () => {
                        "use server"
                        await signOut({
                           redirect: true,
                           redirectTo: "/"
                        })

                     }
                  }>
                  <Button
                     variant={"link"}
                     className='w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'
                     type='submit'
                  >
                     sign-Out
                  </Button>
               </form>
               :
               <form
                  action={
                     async () => {
                        "use server"
                        await signIn('google', {
                           redirect: true,
                           redirectTo: "/property"
                        }, '[profile, email]')

                     }
                  }>
                  <Button
                     variant={"link"}
                     className='w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                     type='submit'
                  >
                     SignIn
                  </Button>
               </form>
         }
      </div>
   )
}

