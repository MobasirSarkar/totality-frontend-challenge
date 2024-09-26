"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Property } from "../../../types/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
   property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
   const handleClick = () => {
      alert('hello')
   }
   const imgUrl: string = `/img/property/${property.image}`
   return (
      <CardContainer className="~sm/2xl:~w-[25rem]/[27rem]">
         <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
               translateZ="0"
               className="text-xl font-bold text-neutral-600 dark:text-white"
            >
               {property.name}
            </CardItem>
            <CardItem
               as="p"
               translateZ="0"
               className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
               {property.type}
            </CardItem>
            <CardItem translateZ="50" className="w-full mt-4">
               <Image
                  src={imgUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
               />
            </CardItem>
            <div className="flex justify-between items-center">
               <CardItem
                  translateZ="0"
                  className="text-xl font-bold text-muted-foreground dark:text-white pt-4"
               >
                  {formatPrice(property.price)}
               </CardItem>
               <CardItem
                  translateZ="0"
                  className="text-base font-bold text-muted-foreground dark:text-white pt-4"
               >
                  <div className="flex items-center justify-between gap-1.5">
                     <MapPin className="shrink-0" size={16} />
                     {property.city}
                  </div>
               </CardItem>
            </div>
            <div className="flex justify-between items-center mt-4">
               <CardItem
                  translateZ={0}
               >
                  <Button
                     onClick={handleClick}
                     className="px-5 py-4 rounded-full bg-[#1ED760] text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
                  >
                     Book Now
                  </Button>
               </CardItem>
               <CardItem
                  translateZ={0}
               >
                  <Link
                     href={`/property/property-details/${property.id}`}
                  >
                     <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        View Detials
                     </button>
                  </Link>
               </CardItem>
            </div>
         </CardBody>
      </CardContainer>
   );
}
