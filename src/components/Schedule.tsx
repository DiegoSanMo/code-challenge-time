import { useState } from "react";
import { Rnd } from "react-rnd";
import { getSectionsBar } from "../utilities";
import ScheduleTime from "./ScheduleTime";

const Schedule = (): any => {
  const [hours, setHours] = useState({ x: 0, y: 0})

  //If status = 0 should not be display the info
  const [status, setStatus] = useState<number>(0)
  const deleteHander = () => {
    setStatus(0)
    setHours({ x: 0, y: 0})
  }

  return(
    <div className='schedule-hour'>
      {getSectionsBar(setStatus, setHours)}
      {status ? <Rnd
        default={{
          x: 542,
          y: 0,
          width: 400,
          height: 'auto',
        }}

        className='schedule-drag'
        bounds='parent'
        scale={1}
        minWidth={200}
        maxHeight={33}
        minHeight={33}
        onResize={(e, direction, ref, delta, position) => {
          const { width,height,} = ref.style
          console.log('height: ', height);
          

          const t = Number(width.split('px')[0])

          // const y =  * 2
          const p = ( position.x * 25.4 ) / 96
          setHours({x: p, y: t})
          
        }}>
          <ScheduleTime data={{x: hours.x, y:hours.y}} handler={deleteHander}/>
      </Rnd> : null}
    </div>
  )

}

export default Schedule;