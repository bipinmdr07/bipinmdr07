import Timeline from 'components/common/timeline';

const Experience = () => {
  const experiences = [
    {
      date: '09/2018 - present',
      company: 'Leapfrog',
      place: 'Kathmandu, Nepal',
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
    {
      date: '12/2017 - 06/2018',
      company: 'FourMB',
      place: 'Kathmandu, Nepal',
      description:
        'I started my career in this Startup company as Web Developer. I was very glad to work here as Junior Ruby on Rails Developer.',
    },
  ];

  return <Timeline experiences={experiences}></Timeline>;
};

export default Experience;
