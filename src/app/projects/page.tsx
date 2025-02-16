'use client';
import { OPENSOURCE_PROJECTS, PROJECTS } from '@/utils/data';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
  return (
    <>
      <section id='projects' className='py-20 text-white'>
        <div className='container mx-auto px-4'>
          <h3 className='my-12 text-center text-4xl font-bold'>
            Career <span>Projects</span>
          </h3>

          <ProjectsSection projects={PROJECTS} />
        </div>
      </section>

      <section id='open-source-projects' className='py-20 text-white'>
        <div className='container mx-auto px-4'>
          <h3 className='my-12 text-center text-4xl font-bold'>
            <span>Open Source</span> Projects
          </h3>

          <ProjectsSection projects={OPENSOURCE_PROJECTS} />
        </div>
      </section>
    </>
  );
}
