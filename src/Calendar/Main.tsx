import * as React from 'react'
import './calendar.scss'

const Main: React.FC = () => (
    <div className="calendar-main">
        <div className="weekday grid_1">SUN</div>
        <div className="weekday grid_2">MON</div>
        <div className="weekday grid_3">TUE</div>
        <div className="weekday grid_4">WED</div>
        <div className="weekday grid_5">THU</div>
        <div className="weekday grid_6">FRI</div>
        <div className="weekday grid_7">SAT</div>
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
