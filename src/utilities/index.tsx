import {days} from '../constants/days';

const getHourValueFormart = (value:number): string | null => {
  const hour = value !== 0 && value % 3 === 0 ? value: ''
  const hourFormat = String(hour).length > 1 ? `${hour}:00`: `0${hour}:00`
  const shouldDisplayHour = hourFormat !== '0:00';
  return shouldDisplayHour ? hourFormat : null
}

export const getDaysName = (): React.ReactNode => {
  return days.map((day, index) => <span className='day' key={index}>{day}</span>)
}

export const getHours = (): React.ReactNode  => {
  const hours:React.ReactNode []  = [];
  for (let index = 0; index < 24; index++) {
    hours.push(<span key={index} className="hour">{ getHourValueFormart(index)}</span>)
  }
  return hours;
}

interface fn {
  x: number,
  y: number
}

export const getSectionsBar = (updateState: (value:number) => void, cleanTime: (values: fn) => void ) :React.ReactNode => {
  const sections: React.ReactNode[] = [];
  const updateStates = ():void => {
    updateState(1)
    cleanTime({x: 0,y: 0})
  }
  
  for (let index = 0; index < 24; index++) {
    sections.push(<span className='line' key={index} onClick={updateStates} >|</span>)
  }
  return sections
} 