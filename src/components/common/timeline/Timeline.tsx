import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Icon from '../icon';

interface PropInterface {
  children?: React.ReactNode;
}

const Timeline = (props: PropInterface) => (
  <div className="timeline-container">
    <VerticalTimeline>
      {props.children}
      <VerticalTimelineElement className="hidden" icon={<Icon name="star" />}></VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default Timeline;
