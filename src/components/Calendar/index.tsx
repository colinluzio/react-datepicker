import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import './calendar.scss'

const [date, setDate] = useState(new Date())

type CalendarProps = {
    date?: Date
}

const Calendar: React.FC<CalendarProps> = props => (
    <div className="calendar-outer">
        {props.date ? setDate(props.date) : ''}
        <Header date={date} />
        <Main date={date} />
    </div>
)

export default Calendar
