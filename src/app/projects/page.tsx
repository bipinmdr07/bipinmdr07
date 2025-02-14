'use client';

import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

import { Badge } from '@/components/ui/badge';
import RenderOnCondition from '@/components/ui/renderOnCondition';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { PROJECTS } from '@/utils/data';
import { transition, variants } from '@/utils/framer_variants';
import { MotionDiv } from '@/utils/motionTags';

export default function Projects() {
  return (
    <div className='container grid min-h-screen place-items-center pt-20 sm:pt-32 lg:pt-0'>
      <div className='mt-12'>
        <MotionDiv
          initial='initial'
          animate='animate'
          variants={variants.moveUp}
          transition={transition.moveUp}
          className='mb-10 text-center'
        >
          <h3>
            My <span>Projects</span>
          </h3>
        </MotionDiv>

        {PROJECTS.map((project, index) => (
          <MotionDiv
            key={project.title}
            initial='initial'
            animate='animate'
            variants={variants.moveDown}
            transition={transition.moveDown}
            className='flex w-full flex-col-reverse items-center gap-10 pb-7 lg:flex-row lg:gap-0 lg:pb-0'
          >
            <div className='flex-1 space-y-3'>
              <h2 className='text-6xl font-semibold text-primary'>{index < 10 ? `0${index}` : index}</h2>
              <h3>{project.title}</h3>
              <p className='w-10/12 text-accent-foreground'>{project.description}</p>
              Contribution:
              <ol>{project?.contributions?.map((item, index): ReactNode => <li key={index}>{item}</li>)}</ol>
              <div className='mt-2 space-x-2 font-semibold tracking-wider text-primary'>
                {project?.tech?.map((item): ReactNode => {
                  return (
                    <Badge key={item} variant='outline' className='text-base text-primary'>
                      {item}
                    </Badge>
                  );
                })}
              </div>
              <br />
              <div className='flex gap-x-3'>
                <RenderOnCondition condition={Boolean(project.github)}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href='#' className='rounded-full bg-accent p-2.5'>
                          <Icon icon='mdi:github' className='text-xl' fill='#000000' />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </RenderOnCondition>
                <RenderOnCondition condition={Boolean(project.external)}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href={project.external} target='_blank' className='rounded-full bg-accent p-2.5'>
                          <Icon icon='mdi:globe' className='text-xl' fill='#000000' />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </RenderOnCondition>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
