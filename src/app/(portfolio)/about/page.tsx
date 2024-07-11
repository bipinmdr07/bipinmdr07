'use client';

import Image from 'next/image';

import { BackgroundGradientAnimation } from '@/app/components/ui/background-gradient-animation';
import { Card } from '@/app/components/ui/card';

export default function About() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(8,0,1)"
      interactive={false}
    >
      <div className="container mx-auto mt-32 max-w-screen-xl px-4">
        <Card className="bg-black/50">
          <div className="flex">
            <div className="mr-4">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={1000}
                height={1000}
                className="rounded-full"
              />
            </div>
            <div className="">
              <h4 className="mt-4 font-bold tracking-wide text-zinc-100">
                About
              </h4>

              <p className="traking-wide mt-8 text-sm leading-relaxed text-zinc-400">
                Skilled Software Engineer with 6+ years of hands-on experience
                building, testing, optimizing web-based applications for diverse
                industry organizations. Knowledgeable in identifying core
                technical problems, finding better solutions to existing
                problems, and applying the sound and optimized way to solve the
                problem in an organized way with a proper splitting of tasks
                into smaller manageable chunks. Driven individual with the
                ability to adapt to any situation and proven potential to grow
                himself and others and highly enthusiastic when it comes to
                learning new technology.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </BackgroundGradientAnimation>
  );
}
