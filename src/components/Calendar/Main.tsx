import * as React from 'react'
import * as helper from '../../helpers/calendar'
import './calendar.scss'

type CalendarProps = {
    date: Date
}
const Main: React.FC<CalendarProps> = props => (
    <div className="calendar-main">
        {helper.weekdays.map((weekday, index) => (
            <div className={`weekday grid_${index + 1}`}>{weekday}</div>
        ))}
        {helper.getPrevMonthDays(props.date)}
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
        <div title="" className="current-month-day grid_1">
            2
        </div>
        <div title="" className="current-month-day grid_2">
            3
        </div>
        <div title="" className="current-month-day grid_3">
            4
        </div>
        <div title="" className="current-month-day grid_4">
            5
        </div>
        <div title="" className="current-month-day grid_5">
            6
        </div>
        <div title="" className="current-month-day grid_6">
            7
        </div>
        <div title="" className="current-month-day grid_7">
            8
        </div>
        <div title="" className="current-month-day grid_1">
            9
        </div>
        <div title="" className="current-month-day grid_2">
            10
        </div>
        <div title="" className="current-month-day grid_3">
            11
        </div>
        <div title="" className="current-month-day grid_4">
            12
        </div>
        <div title="" className="current-month-day grid_5">
            13
        </div>
        <div title="" className="current-month-day grid_6">
            14
        </div>
        <div title="" className="current-month-day grid_7">
            15
        </div>
        <div title="" className="current-month-day grid_1">
            16
        </div>
        <div title="" className="current-month-day grid_2">
            17
        </div>
        <div title="" className="current-month-day grid_3">
            18
        </div>
        <div title="" className="current-month-day grid_4">
            19
        </div>
        <div title="" className="current-month-day grid_5">
            20
        </div>
        <div title="" className="current-month-day grid_6">
            21
        </div>
        <div title="" className="current-month-day grid_7">
            22
        </div>
        <div title="" className="current-month-day grid_1">
            23
        </div>
        <div title="" className="current-month-day grid_2">
            24
        </div>
        <div title="" className="current-month-day grid_3">
            25
        </div>
        <div title="" className="current-month-day grid_4">
            26
        </div>
        <div title="" className="current-month-day grid_5">
            27
        </div>
        <div title="" className="current-month-day grid_6">
            28
        </div>
        <div title="" className="current-month-day grid_7">
            29
        </div>
        <div title="" className="current-month-day grid_1">
            30
        </div>
        <div title="" className="current-month-day grid_2">
            31
        </div>
    </div>
)

export default Main
