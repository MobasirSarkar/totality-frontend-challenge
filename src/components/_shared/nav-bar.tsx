import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/totality-Corps.png"
import Signin from "../Signin";
import { AvatarIcon } from "./avatar-section";
export default async function NavBar() {
   return (
      <header className="shadow-sm z-40 sticky">
         <nav className="m-auto flex max-w-[90rem] items-center justify-between px-3 py-5">
            <Link href="/property" className="flex items-center gap-3">
               <Image src={logo} alt="Logo" className="" width={40} height={40} priority={false} />
               <span className="text-xl font-bold tracking-tight">Totality Corps</span>
            </Link>
            <div className="flex gap-4 items-center">
               <AvatarIcon />
               <Signin />
            </div>
         </nav>
      </header>
   );
}
