<<<<<<< HEAD
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
=======
'use client'

import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
>>>>>>> d893d9c6da674d46a34c23440d8d0c5fa122122b
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
<<<<<<< HEAD
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
=======
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex- flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
        
          return (
            <Link 
            href={link.route}
            key={link.label}
            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {'bg-blue-1': isActive,})}
          >

            {link.label}
          </Link>
          );
        })}

      </div>

>>>>>>> d893d9c6da674d46a34c23440d8d0c5fa122122b
    </section>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar
>>>>>>> d893d9c6da674d46a34c23440d8d0c5fa122122b
