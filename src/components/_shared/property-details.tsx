import React from 'react'
import { Property } from "../../../types/types"
import Link from 'next/link'
import { LinkButton } from '../ui/link-button'
import { CartButton } from '../ui/Cart-Button'


interface PropertyDetailsCardProps {
   property: Property
}

export default function PropertyDetailsCard({ property }: PropertyDetailsCardProps) {
   return (
      <article className='max-w-[90rem] mx-auto py-4'>
         <div className='w-full h-auto flex justify-between px-10 md:px-0'>
            <Link href={`/property`}>
               <LinkButton />
            </Link>
            <CartButton />
         </div>
      </article>
   )
}

