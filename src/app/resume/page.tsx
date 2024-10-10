import { cn } from '@/lib/utils';
import { transition, variants } from '@/utils/framer_variants';
import { MotionButton, MotionDiv, MotionImage } from '@/utils/motionTags';

export default function page() {
  return (
    <>
      <div className={cn('mx-auto min-h-screen max-w-4xl pb-4 pt-32 2xl:pt-60')}>
        <div className='flex w-full flex-col items-center justify-between gap-7 md:flex-row md:gap-0'>
          <div className='flex flex-col items-center gap-x-7 gap-y-4 sm:flex-row sm:gap-y-0'>
            <MotionImage
              initial='initial'
              animate='animate'
              variants={variants.scale}
              transition={transition.scale}
              src='/hero.png'
              width={150}
              height={150}
              alt='avatar'
              className='w-28 md:w-36'
            />
            <MotionDiv
              initial='initial'
              animate='animate'
              variants={variants.moveDown}
              transition={transition.moveDown}
              className='text-center sm:text-left'
            >
              <h3 className='mb-2'>
                Bipin <span>Manandhar.</span>
              </h3>
              <h5>Banepa, Nepal</h5>
            </MotionDiv>
          </div>

          <MotionButton
            initial='initial'
            animate='animate'
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant='outline'
            size='lg'
          >
            Senior Software Engineer
          </MotionButton>
        </div>
      </div>
    </>
  );
}
