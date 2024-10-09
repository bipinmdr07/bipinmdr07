'use client';

import { ROUTES } from '@/utils/data';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { MotionImage, MotionButton, MotionList } from '@/utils/motionTags';
import { transition, variants } from '@/utils/framer_variants';

export default function Menu() {
  const pathname = usePathname();

  return (
    <header className={cn('fixed left-0 right-0 z-50', pathname !== '/' && 'border-b border-border/25 bg-background')}>
      <nav className='container flex items-center justify-between py-4'>
        {/* Logo */}
        <Link href={'/'}>
          <MotionImage
            initial='initial'
            animate='animate'
            variants={variants.scale}
            transition={transition.scale}
            alt='hero'
            src={'/logo.png'}
            width={60}
            height={45}
            className='w-auto'
          />
        </Link>

        {/* web menus */}
        <ul className='hidden items-center gap-6 text-[17px] font-medium md:flex'>
          {ROUTES.map((route, i) => {
            return (
              <MotionList
                key={route.id}
                initial='initial'
                animate='animate'
                variants={variants.moveDown}
                transition={{
                  ...transition.moveDown,
                  delay: i * 0.2,
                }}
              >
                <Link href={route.path} className={cn('hover:text-primary', pathname === route.path && 'text-primary')}>
                  {route.name}
                </Link>
              </MotionList>
            );
          })}
        </ul>

        {/* button */}
        <MotionButton
          initial='initial'
          animate='animate'
          variants={variants.moveLeft}
          transition={transition.moveLeft}
          variant='outline'
          className='hidden md:inline-block'
        >
          Get in Touch
        </MotionButton>

        {/* mobile menu */}
        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}
