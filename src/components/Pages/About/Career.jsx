import Timeline from "../../Timeline";
import { CAREER } from "../../../constants/career";

const Career = () => {
  return (
    <Timeline>
      {CAREER.map((item, index) => (
        <Timeline.Item
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          link={item.link}
          isLast={index === CAREER.length - 1}
        />
      ))}
    </Timeline>
  );
};

export default Career;
