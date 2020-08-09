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
        {helper.getPrevMonthDays(props.date).map((day, index) => (
            <div title="" className={`prev-month-day grid_${index + 1}`}>
                {day}
            </div>
        ))}
        {helper
            .getCurrentMonthDays(props.date)
            .splice(0, 7 - helper.getPrevMonthDays(props.date).length)
            .map((day, index) => (
                <div
                    title=""
                    className={`current-month-day grid_${index +
                        1 +
                        helper.getPrevMonthDays(props.date).length}`}
                >
                    {day}
                </div>
            ))}

        {helper
            .getCurrentMonthDays(props.date)
            .splice(1)
            .map((day, index) => (
                <div
                    title=""
                    className={`current-month-day grid_${helper.getGridIndex(
                        index
                    )}`}
                >
                    {day}
                </div>
            ))}
    </div>
)

export default Main
