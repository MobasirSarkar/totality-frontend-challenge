import { cn } from '@/lib/utils';
import React from 'react';

interface InfoRowProps {
   Icon?: React.ElementType;
   label: string;
   value: React.ReactNode;
   className?: string
}

export const InfoRowCard: React.FC<InfoRowProps> = ({ Icon, label, value, className }) => {
   return (
      <div className={cn('flex w-full h-auto items-center justify-between px-1 border rounded-md bg-white ~sm/2xl:~p-3/7 hover:scale-105 transition-all duration-100 delay-[50ms] hover:bg-teal-50', className)}>
         <div className='font-bold flex items-center gap-1 px-3 capitalize'>
            {Icon && <Icon />}
            <p className='~sm/2xl:~px-[0.1rem]/3 font-bold'>{label}</p>
         </div>
         <div className='~sm/2xl:~px-[0.1rem]/3 text-muted-foreground'>{value}</div>
      </div>
   );
};

