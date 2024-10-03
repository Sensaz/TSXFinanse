import creditDurationInMonths from '../creditDurationInMonths.ts'

describe('creditDurationInMonths should return zero when', () => {
  test('duration equal 0', () => {
    expect(creditDurationInMonths(0, 'DurationInYears')).toBe(0)
  })

  test('duration is negative number', () => {
    expect(creditDurationInMonths(-5, 'DurationInYears')).toBe(0)
  })

  test('duration is NaN', () => {
    expect(creditDurationInMonths(NaN, 'DurationInYears')).toBe(0)
  })

  test('optionDuration is empty string', () => {
    expect(creditDurationInMonths(NaN, '')).toBe(0)
  })

  test('optionDuration is random string', () => {
    expect(creditDurationInMonths(NaN, 'fdsafs')).toBe(0)
  })
})

describe('creditDurationInMonths should positive number when', () => {
  test('duration is positive number', () => {
    expect(creditDurationInMonths(5, 'DurationInMonths')).toBe(5)
  })
  test('duration is positive number', () => {
    expect(creditDurationInMonths(5, 'DurationInYears')).toBe(60)
  })
})
