import { EXPERIENCES } from '@/utils/data';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function Experience() {
  return (
    <section id='experience' className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <h3 className='fond-bold my-12 text-center text-4xl'>
          Professional <span>Journey</span>
        </h3>

        <ExperienceTimeline experiences={EXPERIENCES} />
      </div>
    </section>
  );
}
