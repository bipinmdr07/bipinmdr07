import { EXPERTISE_AREA, LANGUAGES_AND_TOOLS } from '@/utils/data';
import { variants, transition } from '@/utils/framer_variants';
import { MotionDiv } from '@/utils/motionTags';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Skills() {
  return (
    <div className='container mx-auto px-4 py-20 text-white'>
      <section id='skills'>
        <h3 className='fontbold my-12 text-center text-4xl'>
          Expertise <span>Area</span>
        </h3>

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
      </section>

      <section id='tools'>
        <h3 className='fontbold my-12 text-center text-4xl'>
          Languages and <span>Tools</span>
        </h3>
        <div className='flex flex-wrap gap-6'>
          {LANGUAGES_AND_TOOLS.map((tool, i) => (
            <MotionDiv
              key={i}
              initial='initial'
              animate='animate'
              variants={variants.moveDown}
              transition={{ ...transition.moveDown, delay: i * 0.2 }}
              title={tool.name}
              className='cursor-pointer'
            >
              <Icon icon={tool.icon} width={35} height={35} />
            </MotionDiv>
          ))}
        </div>
      </section>
    </div>
  );
}
