import Image from "next/image";

import { Vortex } from "@/app/components/ui/vortex";
import { Meteors } from "@/app/components/ui/meteors";
import { HeroNav } from "@/app/components/ui/hero-nav";

import { navs } from '@/constant'


export default function Home() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={300}
            height={300}
            className="rounded-full"
            priority
          />
          <h2 className="text-white text-xl md:text-6xl font-bold text-center mt-12">
            Bipin Manandhar
          </h2>

          <Meteors number={130} width={1920} />

          <HeroNav navs={navs} />
      </Vortex>
    </div>
  )
}
