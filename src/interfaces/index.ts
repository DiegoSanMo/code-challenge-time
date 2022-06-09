
export interface WorkingHours {
  [day: string]: [number, number] // [900, 1730] => 09:00 to 17:30
}

export interface Hours {
  hours: number[];
}

export interface DaysProps {
  days: string[];
}

export interface ScheduleTimeProps {
  data: {
    x: number,
    y: number
  },
  handler: React.MouseEventHandler
}