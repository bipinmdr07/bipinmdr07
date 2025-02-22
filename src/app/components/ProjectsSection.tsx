import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { transition, variants } from '@/utils/framer_variants';
import { MotionDiv } from '@/utils/motionTags';
import React from 'react';
import { Icon } from '@iconify/react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  github?: string;
  projectUrl?: string;
  technologies: string[];
}

interface ProjectsSectionProps {
  projects: readonly Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
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
                      // Handle info icon click (e.g., open a modal or show more details)
                      console.log('Info clicked for:', project.title);
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
    </div>
  );
};

export default ProjectsSection;
