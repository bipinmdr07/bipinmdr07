import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import Timeline from 'components/common/timeline';
import Sidesheet from 'components/common/sidesheet';

const Experience = () => {
  const experiences = [
    {
      date: '01/2020 - present',
      company: 'Leapfrog Technology',
      place: 'Kathmandu, Nepal',
      designation: 'Software Engineer',
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
    {
      date: '09/2018 - 01/2020',
      company: 'Leapfrog Technology',
      place: 'Kathmandu, Nepal',
      designation: 'Associate Software Engineer',
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
    {
      date: '07/2018 - 09/2018',
      company: 'Leapfrog Technology',
      place: 'Kathmandu, Nepal',
      designation: 'Intern',
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
    {
      date: '12/2017 - 06/2018',
      company: 'FourMB',
      place: 'Kathmandu, Nepal',
      designation: 'Junior Ruby on Rails Developer',
      mainSkills: ['ruby on rails', 'postgresql', 'TDD'],
      skills: ['ruby', 'ruby on rails', 'rspec', 'TDD', 'postgresql'],
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
  ];

  return (
    <>
      <Timeline>
        {experiences.map((experience, i) => (
          <VerticalTimelineElement date={experience.date} key={i} className="secondary">
            {/* <Card>Body</Card> */}
            <div className="vertical-timeline-element-hehe">
              <h3>{experience.company}</h3>
              <h4>{experience.place}</h4>
              <h5>{experience.designation}</h5>
              <p>{experience.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </Timeline>
    </>
  );
};

export default Experience;
