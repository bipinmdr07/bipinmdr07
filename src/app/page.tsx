import Image from "next/image";

import { Vortex } from "@/components/ui/vortex";
import { Meteors } from "@/components/ui/meteors";

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
          <h2 className="text-white text-sm md:text-6xl font-bold text-center mt-12">
            Bipin Manandhar
          </h2>

          <Meteors number={130} width={1920} />
      </Vortex>
    </div>
  )
}
