import Button from "./Button"; 

const Timeline = ({ timeline, onItemTimelineClick }) => {
  return (
    <div className="history">
      <p>history</p>
      {
        timeline.map((_, index) => (
          <Button key={index} onClick={() => onItemTimelineClick (index)} >Go to move {index}</Button>
        ))
      }
    </div>
  );
};

export default Timeline;