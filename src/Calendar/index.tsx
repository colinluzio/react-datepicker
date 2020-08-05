import * as React from 'react'
import Header from './Header'
import Main from './Main'
import './calendar.scss'

const Calendar: React.FC = () => (
    <div className="calendar-outer">
        <Header />
        <Main />
    </div>
)

export default Calendar
