import { LandingPage } from "@/components/_shared/landing-bg";
import LandingPageButton from "@/components/ui/LandingPageButton";
import React from "react"
export default function Home() {
   return (
      <main className="w-screen h-screen">
         <LandingPage className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
               Mobasir Housing, <br /> Find Your Dream House.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center capitalize mb-5">
               Get Yourself a House which worth Buying at Best Rate and best Conditions
            </p>
            <LandingPageButton />
         </LandingPage>
      </main>
   );
}
