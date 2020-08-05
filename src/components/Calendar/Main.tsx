import * as React from 'react'
import * as helper from '../../helpers/calendar'
import './calendar.scss'

const Main: React.FC = () => (
    <div className="calendar-main">
        {helper.weekdays.map((weekday, index) => (
            <div className={`weekday grid_${index}`}>{weekday}</div>
        ))}
        ;
        <div title="" className="prev-month-day grid_1">
            26
        </div>
        <div title="" className="prev-month-day grid_2">
            27
        </div>
        <div title="" className="prev-month-day grid_3">
            28
        </div>
        <div title="" className="prev-month-day grid_4">
            29
        </div>
        <div title="" className="prev-month-day grid_5">
            30
        </div>
        <div title="" className="prev-month-day grid_6">
            31
        </div>
        <div title="" className="current-month-day grid_7">
            1
        </div>
    </div>
)

export default Main
