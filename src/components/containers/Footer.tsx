'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <footer className='border-t'>
      <div className='container flex flex-col justify-between gap-5 py-3 sm:flex-row sm:items-center sm:gap-0'>
        <Image src='/logo.png' width={40} height={40} alt='logo'></Image>

        <h3 className='text-xl sm:text-2xl'>
          Discover a <span>gateway</span> to unparalleled <br /> <span>design</span> creativity
        </h3>
      </div>

      <div className='bg-accent py-8 text-center text-accent-foreground'>
        <p>Copyright &copy; 2023-2024. All rights reserved</p>
      </div>
    </footer>
  );
}
