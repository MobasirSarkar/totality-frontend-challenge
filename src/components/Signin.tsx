import React from 'react'
import { signIn } from '../../auth'
import { Button } from './ui/button'

export default function Signin() {
   return (
      <div className='w-full flex items-center justify-center h-screen bg-gray-200'>
         <form
            className='bg-gray-200 p-7 rounded shadow-md w-[20rem] h-[40rem] flex flex-col justify-evenly'
            action={
               async () => {
                  "use server"
                  await signIn('google')

               }
            }>
            <h2 className='w-full text-center'>Sign In</h2>
            <Button
               variant={"link"}
               className='w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
               type='submit'
            >
               Google
            </Button>
         </form>
      </div>
   )
}

