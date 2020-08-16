import * as React from 'react'
import * as helper from '../../helpers/calendar'
import './calendar.scss'

interface CalendarProps {
    date: Date
    nextMonth: (event: React.MouseEvent<HTMLButtonElement>) => void
    prevMonth: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<CalendarProps> = props => (
    <div className="calendar-header">
        <button
            title="Previous Month"
            className="button-prev"
            onClick={props.prevMonth}
        ></button>
        <div className="title">{helper.getMonth(props.date)}</div>
        <button
            title="Next Month"
            className="button-next"
            onClick={props.nextMonth}
        ></button>
    </div>
)

export default Header
