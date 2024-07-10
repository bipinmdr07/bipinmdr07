import Image from 'next/image';

import { Vortex } from '@/app/components/ui/vortex';
import { HeroNav } from '@/app/components/ui/hero-nav';

import { navs } from '@/constant';

export default function Home() {
  return (
    <div className="mx-auto h-screen w-[calc(100%-4rem)] overflow-hidden rounded-md">
      <Vortex
        backgroundColor="black"
        rangeSpeed={9}
        particleCount={25}
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={300}
          height={300}
          className="rounded-full"
          priority
        />
        <h2 className="mt-12 text-center text-xl font-bold text-white md:text-6xl">
          Bipin Manandhar
        </h2>

        <HeroNav navs={navs} />
      </Vortex>
    </div>
  );
}
