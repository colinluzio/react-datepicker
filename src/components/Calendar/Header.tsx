import * as React from 'react'
import * as helper from '../../helpers/calendar'
import './calendar.scss'

type CalendarProps = {
    date: Date
}

const Header: React.FC<CalendarProps> = props => (
    <div className="calendar-header">
        <button title="Previous Month" className="button-prev"></button>
        <div className="title">{helper.getMonth(props.date)}</div>
        <button title="Next Month" className="button-next"></button>
    </div>
)

export default Header
