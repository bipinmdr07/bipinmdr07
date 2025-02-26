import { MotionTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { EXPERTISE_AREA, LANGUAGES_AND_TOOLS } from '@/utils/data';
import { transition, variants } from '@/utils/framer_variants';
import { MotionButton, MotionDiv, MotionImage } from '@/utils/motionTags';
import { Icon } from '@iconify/react';

export default function Resume() {
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
              src='/pp.jpg'
              width={150}
              height={150}
              alt='avatar'
              className='w-28 rounded-full md:w-36'
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

        <MotionTabs
          initial='initial'
          animate='animate'
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue='about'
          className='mt-10 leading-7'
        >
          <TabsList>
            <TabsTrigger value='about'>About</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          <TabsContent value='about'>
            <h6>Who I&apos;m</h6>
            <p className='mt-2 text-accent-foreground'>
              Skilled Software Engineer with 6+ years of hands-on experience building, testing, optimizing and
              maintaining web-based applications for diverse industry organizations. Proficient in software development,
              including coding, debugging, testing, and troubleshooting. Knowledgeable in identifying core technical
              problems, finding better solutions to existing problems, and applying the sound and optimized way to solve
              the problem in an organized way to achieve the desired result. Strong communication skills with the
              ability to work in a team environment and independently.
            </p>
            <p className='mt-2 text-accent-foreground'>
              Driven individual with the ability to adapt to any situation and proven potential to grow and learn.
              Highly enthusiastic and always ready to take on new challenges when it comes to learning new technologies
              and solving real-world problems.
            </p>
          </TabsContent>

          <TabsContent value='skills' className='bg-transparent'>
            <div>
              <h6 className='mb-6'>Expertise Area</h6>
              <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {EXPERTISE_AREA.map((expertise, i) => (
                  <MotionDiv
                    key={expertise.id}
                    initial='initial'
                    animate='animate'
                    variants={variants.moveRight}
                    transition={{ ...transition.moveRight, delay: i * 0.6 }}
                    className='group flex cursor-pointer flex-col items-center rounded-3xl bg-accent p-5'
                  >
                    <Icon icon={expertise.icon} width={55} height={55} className='mb-6' />
                    <h4>
                      <span>{expertise.name.split(' ')[0]}</span>
                      &nbsp;
                      {expertise.name.split(' ').slice(1).join(' ')}
                    </h4>
                  </MotionDiv>
                ))}
              </div>
            </div>
            <div>
              <h6 className='mb-6 mt-12'>Languages and Tools</h6>
              <div className='flex flex-wrap gap-6'>
                {LANGUAGES_AND_TOOLS.map((tool, i) => (
                  <MotionDiv
                    key={i}
                    initial='initial'
                    animate='animate'
                    variants={variants.moveDown}
                    transition={{ ...transition.moveDown, delay: i * 0.2 }}
                    title={tool.name}
                  >
                    <Icon icon={tool.icon} width={35} height={35} />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
