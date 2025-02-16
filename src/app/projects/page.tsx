'use client';
import { FC, JSX } from 'react';
import { PROJECTS } from '@/utils/data';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
  return (
    <section id='projects' className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <h3 className='my-12 text-center text-4xl font-bold'>
          Career <span>Projects</span>
        </h3>

        <ProjectsSection projects={PROJECTS} />
      </div>
    </section>
  );
}
