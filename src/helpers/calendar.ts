export const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const getTotalDays = (date: Date): number => {
    let totalDays =
        date.getMonth() == 0 ||
        date.getMonth() == 2 ||
        date.getMonth() == 4 ||
        date.getMonth() == 6 ||
        date.getMonth() == 7 ||
        date.getMonth() == 9 ||
        date.getMonth() == 11
            ? 31
            : 30
    totalDays =
        date.getMonth() !== 1
            ? totalDays
            : date.getFullYear() % 4 === 0
            ? 29
            : 28

    return totalDays
}

export const getPrevMonthDays = (date: Date): Array<number> => {
    let month = date.getMonth()
    let startDay = `${month + 1} / 01 / ${date.getFullYear()}`
    let firstDay = new Date(startDay)
    let prevMonth = new Date(date)
    prevMonth.setMonth(date.getMonth() - 1)

    let totalDays = getTotalDays(prevMonth)
    let prevMonthDays = []

    for (let x = 1; x < totalDays + 1; x++) {
        prevMonthDays.push(x)
    }

    prevMonthDays = prevMonthDays.reverse().splice(0, firstDay.getDay())

    return prevMonthDays
}

export const getCurrentMonthDays = (date: Date): Array<number> => {
    let totalDays = getTotalDays(new Date(date.getMonth() - 1))
    let monthDays = []

    for (let x = 1; x < totalDays + 1; x++) {
        monthDays.push(x)
    }

    return monthDays
}

export const getGridIndex = (index: number): number => {
    if (8 > index + 1) return index + 1

    return (index % 7) + 1
}
