'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { transition, variants } from '@/utils/framer_variants';
import { MotionDiv } from '@/utils/motionTags';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from '@/components/ui/drawer';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  github?: string;
  projectUrl?: string;
  technologies: string[];
  contributions?: string[];
}

interface ProjectsSectionProps {
  projects: readonly Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='space-y-20'>
      {projects.map((project, index) => (
        <MotionDiv
          initial='initial'
          animate='animate'
          variants={variants.moveLeft}
          transition={{ ...transition.moveLeft, delay: index * 0.5 }}
          key={project.id}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
        >
          {/* Project Image */}
          <div className='opacity-10- w-full cursor-pointer hover:opacity-70 md:w-1/2'>
            <div className='relative'>
              <Image
                src={project.imageUrl}
                width={1080}
                height={920}
                alt={project.title}
                className='h-64 w-full rounded-lg object-cover shadow-lg md:h-80'
              />

              {/* Overlay */}
              <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                <div className='flex space-x-6'>
                  <a
                    href={project.projectUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:scale-[1.15]'
                  >
                    <Icon icon='mdi:external-link' width={24} height={24} /> {/* External Link Icon */}
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsOpen(true);
                    }}
                    className='text-white hover:scale-[1.15]'
                  >
                    <Icon icon='mdi:information-outline' width={24} height={24} /> {/* Info Icon */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className='w-full md:w-1/2'>
            <h3 className='mb-4 text-2xl font-bold'>{project.title}</h3>
            <p className='mb-6 text-gray-300'>{project.description}</p>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, idx) => (
                <Badge variant='outline' key={idx} className='bg-gray-600 text-base text-sm text-gray-200'>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </MotionDiv>
      ))}

      <Drawer open={isOpen}>
        {/* Contributions list */}
        <DrawerContent>
          <div className='mx-auto mb-20 flex-1 space-y-4 md:w-8/12'>
            <DrawerHeader>
              <div className='flex w-full justify-between'>
                <h3 className='text-lg'>Contributions</h3>
                <DrawerClose onClick={() => setIsOpen(false)}>
                  <Icon icon='mdi:close' width={24} height={24} />
                </DrawerClose>
              </div>
            </DrawerHeader>
            <ul className='list-disc space-y-2 pl-6 text-sm text-accent-foreground'>
              {selectedProject?.contributions?.map((item, index) => (
                <li key={index} className='leading-relaxed'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProjectsSection;
