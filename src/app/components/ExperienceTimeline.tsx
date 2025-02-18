interface Role {
  title: string;
  startDate: string;
  accomplishments: string[];
}

interface Experience {
  company: string;
  startDate: string;
  endDate: string;
  logo: string;
  roles: Role[];
}

interface TimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: TimelineProps) => {
  return (
    <div className='relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      {/* Vertical line for the timeline */}
      <div className='absolute left-1/2 top-0 h-full w-1 bg-gray-200 md:block' />

      {experiences.map((experience, companyIndex) => (
        <div key={experience.company} className='mb-12'>
          {/* Company Section */}
          <div className='md:flex md:items-center md:justify-between'>
            {/* Left side (even index) */}
            <div className={`order-first hidden md:block md:w-5/12`} />

            {/* Company Card */}
            <div className='relative z-10 mx-auto w-full max-w-md md:w-4/12'>
              <div className='flex items-center justify-center rounded-lg bg-accent p-6 shadow-lg ring-1 ring-black/5 transition-all hover:scale-105'>
                <div className='text-center'>
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='mx-auto mb-4 h-16 w-16 object-contain'
                  />
                  <h3 className='text-lg font-semibold'>{experience.company}</h3>
                  <p className='text-sm text-accent-foreground'>
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side (odd index) */}
            <div className='order-last hidden md:block md:w-5/12' />
          </div>

          {/* Roles Section */}
          <div className='mt-8 space-y-8'>
            {experience.roles.map((role, roleIndex) => (
              <div
                key={role.title}
                className={`relative md:flex md:items-center md:justify-between ${
                  companyIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Role Card */}
                <div
                  className={`mb-4 flex flex-1 items-center transition-all md:mb-0 md:w-5/12 ${
                    companyIndex % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div className='w-full rounded-lg p-6 ring-1 ring-black/5'>
                    <div className='flex items-center justify-between md:block'>
                      <h3 className='text-base font-semibold'>{role.title}</h3>
                      <p className='text-sm text-accent-foreground md:mt-1'>{role.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className='absolute left-1/2 top-6 -ml-2 h-4 w-4 rounded-full bg-indigo-500 md:relative md:left-0 md:top-0 md:mx-4 md:ml-0 md:mr-0 md:h-6 md:w-6 md:flex-none' />

                {/* Accomplishments List */}
                <div className='flex-1 space-y-4 hover:scale-105 md:w-5/12'>
                  <div className='rounded-lg bg-accent p-6 opacity-70'>
                    <h3 className='mb-2 text-lg'>Accomplishments</h3>
                    <ul className='list-disc space-y-2 pl-6 text-sm text-accent-foreground'>
                      {role.accomplishments.map((item, index) => (
                        <li key={index} className='leading-relaxed'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
