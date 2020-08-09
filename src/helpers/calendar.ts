export const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const getTotalDays = (date: Date): number => {
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

    let totalDays = getTotalDays(new Date(date.getMonth() - 1))
    let prevMonthDays = []

    for (let x = 1; x < totalDays + 1; x++) {
        prevMonthDays.push(x)
    }
    console.log(startDay)
    console.log(prevMonthDays)

    return prevMonthDays
}
