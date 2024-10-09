import { transition, variants } from '@/utils/framer_variants';
import { MotionButton, MotionDiv, MotionImage } from '@/utils/motionTags';
import { cn } from '@/lib/utils';
import { Luckiest_Guy } from 'next/font/google';
import { DownloadIcon } from 'lucide-react';
import { SOCIAL_MEDIA } from '@/utils/data';
import { Icon } from '@iconify/react';

const luck = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <div className='flex h-dvh w-full flex-col items-center justify-between overflow-hidden pt-5 2xl:container md:flex-row'>
      <div className='relative flex h-full max-w-xl flex-1 flex-col items-center justify-center space-y-6 md:ml-auto md:items-end'>
        <MotionDiv
          initial='initial'
          animate='animate'
          variants={variants.rise}
          transition={transition.rise}
          className='absolute -left-28 top-96 flex -rotate-90 items-center gap-x-4 text-accent-foreground md:-left-8 md:top-auto'
        >
          <MotionDiv
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            className='grid size-14 place-items-center rounded-full border-4'
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: 'reverse',
            }}
          >
            <div className='size-3 rounded-full bg-accent-foreground'></div>
          </MotionDiv>
          <h4 className='text-2xl'>Software Engineer</h4>
        </MotionDiv>
        <MotionDiv
          initial='initial'
          animate='animate'
          variants={variants.moveRight}
          transition={transition.moveRight}
          className={cn('text-center md:text-right', luck.className)}
        >
          <h1>
            Bipin <br />
            <span>Manandhar</span>
          </h1>
        </MotionDiv>

        <br />

        <MotionButton
          initial='initial'
          animate='animate'
          whileHover={{ scale: 0.95 }}
          variants={variants.moveUp}
          transition={transition.moveUp}
        >
          <DownloadIcon className='mr-2' />
          Download CV
        </MotionButton>

        <div className='bottom-6 left-2 flex items-center gap-x-3 md:absolute'>
          {SOCIAL_MEDIA.map((item, i) => {
            return (
              <MotionDiv
                whileHover={{ scale: 1.2 }}
                initial='initial'
                animate='animate'
                variants={variants.moveUp}
                transition={{
                  ...transition.moveUp,
                  delay: 0.2 * i,
                }}
                key={item.id}
                className='grid place-items-center rounded-full bg-accent-foreground'
              >
                <Icon icon={item.icon} className='cursor-pointer text-4xl' fill='#000000' />
              </MotionDiv>
            );
          })}
        </div>
      </div>
      <div className='flex max-w-lg items-end self-end md:h-[95%] md:max-w-[50%]'>
        <MotionImage
          src={'/hero.png'}
          alt='hero'
          height={720}
          width={720}
          initial='initial'
          animate='animate'
          variants={variants.moveLeft}
          transition={{
            ...transition.moveLeft,
            delay: 1.5,
          }}
          className='max-h-full object-cover'
        />
      </div>
    </div>
  );
}
