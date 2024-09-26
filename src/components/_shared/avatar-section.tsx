import React from "react"
import { auth } from "../../../auth"
import Image from "next/image"

export async function AvatarIcon() {
   const session = await auth()
   if (!session) return null
   return (
      <div>
         <Image src={session.user?.image!} alt={session.user?.name!} width={40} height={40} className="rounded-full" />
      </div>
   )
}
