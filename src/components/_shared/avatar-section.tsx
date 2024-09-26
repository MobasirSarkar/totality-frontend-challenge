import React from "react"
import { auth } from "../../../auth"
import Image from "next/image"
import { CartIcon } from "../ui/CartIcon"

export async function AvatarIcon() {
   const session = await auth()
   if (!session) return null
   return (
      <div className="flex items-center gap-2">
         <CartIcon />
         <Image src={session.user?.image!} alt={session.user?.name!} width={40} height={40} className="rounded-full" />
      </div>
   )
}
