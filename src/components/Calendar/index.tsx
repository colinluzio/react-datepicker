import React, { useState } from 'react'
import './calendar.scss'
import Header from './Header'
import Main from './Main'

type DateProps = {
    date?: Date
}

const Calendar: React.FC<DateProps> = props => {
    const [date, setDate] = useState(props.date ? props.date : new Date())

    const prevMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() - 1)))
    }

    const nextMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() + 1)))
    }
    return (
        <div className="calendar-outer">
            <Header date={date} nextMonth={nextMonth} prevMonth={prevMonth} />
            <Main date={date} />
        </div>
    )
}

export default Calendar
