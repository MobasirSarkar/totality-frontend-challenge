import React from 'react'

export const LinkButton = () => {
   return (
      <button className="hover:underline group cursor-pointer relative shadow-zinc-900 rounded-md text-md font-semibold text-black inline-block border p-3 rouned-lg">
         <div className="relative flex items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10 pl-1">
            <span>{`Go to Property`}</span>
         </div>
      </button>
   )
}
