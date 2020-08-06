export const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const getPrevMonthDays = (date: Date) => {
    let month = date.getMonth()
    let startDay = `${month + 1} / 01 / ${date.getFullYear()}`

    let prevMonth = new Date(date.getMonth() - 1)
    let totalDays =
        prevMonth.getMonth() == (0 || 2 || 4 || 6 || 7 || 9 || 11) ? 31 : 30
    totalDays =
        prevMonth.getMonth() !== 1
            ? totalDays
            : prevMonth.getFullYear() % 4 === 0
            ? 29
            : 28

    console.log(new Date(startDay).getDay())
    console.log(totalDays)
}
