import { ScheduleTimeProps } from "../interfaces";

export const ScheduleTime: React.FC<ScheduleTimeProps> = ({data, handler}) => (
  <div className="drag-info-container">
    <span>{data.x}</span>
    <span onClick={handler}>Delete</span>
    <span>{data.y}</span>
  </div>);


export default ScheduleTime;