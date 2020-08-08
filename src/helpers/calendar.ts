export const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const getPrevMonthDays = (date: Date) => {
    let month = date.getMonth()
    let startDay = `${month + 1} / 01 / ${date.getFullYear()}`

    let prevMonth = new Date()
    prevMonth.setMonth(date.getMonth() - 1)
    let totalDays =
        prevMonth.getMonth() == 0 ||
        prevMonth.getMonth() == 2 ||
        prevMonth.getMonth() == 4 ||
        prevMonth.getMonth() == 6 ||
        prevMonth.getMonth() == 7 ||
        prevMonth.getMonth() == 9 ||
        prevMonth.getMonth() == 11
            ? 31
            : 30
    totalDays =
        prevMonth.getMonth() !== 1
            ? totalDays
            : prevMonth.getFullYear() % 4 === 0
            ? 29
            : 28
    console.log(prevMonth.getMonth())
    console.log(new Date(startDay).getDay())
    console.log(totalDays)
}
