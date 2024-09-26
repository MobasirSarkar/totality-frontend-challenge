import React from 'react'
import { Property } from "../../../types/types"
import Link from 'next/link'
import { LinkButton } from '../ui/link-button'
import { CartButton } from '../ui/Cart-Button'
import Image from 'next/image'
import { LandPlot, MapPinHouse } from 'lucide-react'
import ApartementIcon from '../icon/ApartementIcon'
import BathtubIcon from '../icon/Bathtub'
import BedIcon from '../icon/BedIcon'
import SquareFoot from '../icon/SquareFoot'
import ParkingIcon from '../icon/ParkingIcon'
import PriceIcon from '../icon/PriceIcon'
import { formatPrice } from '@/lib/utils'
import ConstructionIcon from '../icon/ConstructionIcon'
import { InfoRowCard } from './InfoCard'

interface PropertyDetailsCardProps {
   property: Property
}


export default function PropertyDetailsCard({ property }: PropertyDetailsCardProps) {
   return (
      <article className='max-w-[90rem] mx-auto py-4'>
         <section className='w-full h-auto flex justify-between px-10 md:px-0'>
            <Link href={`/property`}>
               <LinkButton />
            </Link>
            <CartButton />
         </section>
         <section className='w-full h-auto flex items-center flex-col mt-4'>
            <div className='~sm/2xl:~w-[23rem]/[50rem]'>
               <Image src={`/img/property/${property.image}`} alt={property.name} width={1000} height={1000} className='rounded-lg border' />
            </div>
            <div className='~sm/2xl:~w-[24rem]/[50rem] h-auto flex flex-col items-center mt-2 gap-3 ~sm/2xl:~text-base/xl'>
               <div className='flex w-full h-auto items-center justify-between px-1 flex-col gap-3'>
                  <InfoRowCard Icon={PriceIcon} value={formatPrice(property.price)} label={'Price:'} />
                  <InfoRowCard Icon={LandPlot} value={property.area} label={'Area :'} />
                  <InfoRowCard Icon={MapPinHouse} value={property.city} label={'City :'} />
                  <InfoRowCard Icon={SquareFoot} value={property.floorspace} label={'Floorspace :'} />
                  <InfoRowCard Icon={ApartementIcon} value={property.address} label={'Add.:'} />
                  <InfoRowCard Icon={BedIcon} value={property.beds} label={'Beds :'} />
                  <InfoRowCard Icon={BathtubIcon} value={property.baths} label={'Bathrooms :'} />
                  <InfoRowCard Icon={ParkingIcon} value={property.parking} label={'Parking :'} />
                  <InfoRowCard Icon={ConstructionIcon} value={property.construction} label={'Construction:'} className='capitalize' />
               </div>
            </div>
         </section>
      </article>
   )
}

