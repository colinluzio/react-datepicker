import * as React from 'react'
import Header from './Header'
import Main from './Main'
import './calendar.scss'

let date = new Date()

const Calendar: React.FC = () => (
    <div className="calendar-outer">
        <Header date={date} />
        <Main date={date} />
    </div>
)

export default Calendar
