import * as React from 'react'
import './calendar.scss'

const Header: React.FC = () => (
    <div className="calendar-header">
        <button title="Previous Month" className="button-prev"></button>
        <div className="title"></div>
        <button title="Next Month" className="button-next"></button>
    </div>
)

export default Header
