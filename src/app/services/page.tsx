import { Button } from '@/components/ui/button';
import { SERVICES } from '@/utils/data';
import { transition, variants } from '@/utils/framer_variants';
import { MotionDiv } from '@/utils/motionTags';
import { Icon } from '@iconify/react';

export default function Services() {
  return (
    <div className='container grid min-h-screen place-items-center pb-7 pt-32'>
      <div>
        {/* Heading */}
        <MotionDiv
          initial='initial'
          animate='animate'
          variants={variants.moveUp}
          transition={transition.moveUp}
          className='text-center'
        >
          <h3>
            Services <span>Offered</span>
          </h3>
        </MotionDiv>

        {/* Content */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {SERVICES.map((service, i) => {
            return (
              <MotionDiv
                key={service.id}
                initial='initial'
                animate='animate'
                variants={variants.moveRight}
                transition={{
                  ...transition.moveRight,
                  delay: i * 0.6,
                }}
                className='group flex cursor-pointer flex-col justify-between rounded-3xl bg-accent p-5'
              >
                <div>
                  <Icon icon={service.icon} width={55} height={55} className='' />
                  <div>
                    <h3 className='mb-2'>
                      <span>{service.name.split(' ')[0]}</span>
                      &nbsp;
                      {service.name.split(' ').slice(1).join(' ')}
                    </h3>
                    <small className='text-accent-foreground'>{service.description}</small>
                  </div>
                </div>
                <Button variant='plain' size='sm' className='ml-auto mt-7 block'>
                  Learn More
                </Button>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </div>
  );
}
