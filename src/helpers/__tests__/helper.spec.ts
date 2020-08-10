import * as calendar from '../calendar'

test('return correct grid index', () => {
    expect(calendar.getGridIndex(4)).toBe(5)
    expect(calendar.getGridIndex(21)).toBe(1)
})

test('return correct number of days', () => {
    expect(calendar.getTotalDays(new Date('08-10-2020'))).toBe(31)
    expect(calendar.getTotalDays(new Date('02-10-2020'))).toBe(29)
    expect(calendar.getTotalDays(new Date('01-10-2019'))).toBe(31)
    expect(calendar.getTotalDays(new Date('06-10-2019'))).toBe(30)
    expect(calendar.getTotalDays(new Date('02-10-2019'))).toBe(28)
})
