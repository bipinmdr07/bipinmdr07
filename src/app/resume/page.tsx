import Mermaid from '@/components/containers/Mermaid';
import { MotionTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { EXPERTISE_AREA, LANGUAGES_AND_TOOLS } from '@/utils/data';
import { transition, variants } from '@/utils/framer_variants';
import { MotionButton, MotionDiv, MotionImage } from '@/utils/motionTags';
import  {Icon} from '@iconify/react'

export default function page() {
  const gitString = `
---
title: Work experience
---
gitGraph BT:
    commit id: "Start"
    commit id: "Jan 01, 2018"
    branch "Four MB"
    commit id: "-" tag: "Junior RoR Developer"
    checkout Experience
    merge "Four MB" id: "Jun 09, 2018"
    commit id: "Jun 11, 2018"
    branch "Leapfrog Technology"
    commit id: "Intern" tag: "SE Intern"
    checkout Experience
    merge "Leapfrog Technology" id: "Sept 11, 2018"
    checkout "Leapfrog Technology"
    commit id: "ASE" tag: "Associate Software Engineer"
    checkout Experience
    merge "Leapfrog Technology" id: "Dec 12, 2019"
    checkout "Leapfrog Technology"
    commit id: "SE" tag: "Software Engineer"
    checkout Experience
    merge "Leapfrog Technology" id: "Dec 16, 2019"
    checkout "Leapfrog Technology"
    commit id: "SSE" tag: "Senior Software Engineer"
    commit id: "." tag: "current"
    checkout Experience
    commit id: "current"
`;

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
            <TabsTrigger value='experience'>Experience</TabsTrigger>
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
              <h6 className="mb-6">Expertise Area</h6>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {EXPERTISE_AREA.map((expertise, i) => (
                  <MotionDiv key={expertise.id}
                    initial="initial"
                    animate="animate"
                    variants={variants.moveRight}
transition={{ ...transition.moveRight, delay: i * 0.6 }}
                    className="bg-accent p-5 cursor-pointer group rounded-3xl flex flex-col items-center"
                  >
                    <Icon icon={expertise.icon} width={55} height={55} className="mb-6" />
                    <h4>
                      <span>{expertise.name.split(" ")[0]}</span>
                      &nbsp;
                      {expertise.name.split(" ").slice(1).join(' ')}
                    </h4>
                  </MotionDiv>
                ))}
              </div>
            </div>
            <div>
              <h6 className="mt-12 mb-6">Languages and Tools</h6>
              <div className="flex gap-6 flex-wrap">
                {LANGUAGES_AND_TOOLS.map((tool, i) => (
                  <MotionDiv key={i}
                    initial="initial"
                    animate="animate"
                    variants={variants.moveDown}
                    transition={{ ...transition.moveDown,
                                  delay: i * 0.2
                    }}
                    title={tool.name}
                  >
                    <Icon icon={tool.icon} width={35} height={35} />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value='experience' className='bg-transparent'>
            <Mermaid className='flex justify-center'>{gitString}</Mermaid>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
