import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Icon from '../icon';

type Experience = {
  date: string;
  company: string;
  place: string;
  designation: string;
  description: string;
};

interface PropInterface {
  experiences: Array<Experience>;
}

const Timeline = (props: PropInterface) => (
  <div className="timeline-container">
    <VerticalTimeline>
      {props.experiences.map((experience, i) => (
        <VerticalTimelineElement date={experience.date} key={i} className="secondary">
          <div className="vertical-timeline-element">
            <h3>{experience.company}</h3>
            <h4>{experience.place}</h4>
            <h5>{experience.designation}</h5>
            <p>{experience.description}</p>
          </div>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement className="hidden" icon={<Icon name="star" />}></VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default Timeline;
