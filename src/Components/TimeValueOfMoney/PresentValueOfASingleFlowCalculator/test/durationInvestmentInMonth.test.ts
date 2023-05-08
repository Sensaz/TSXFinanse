import durationInvestmentInMonth from '../FunctionForTest/durationInvestmentInMonth.ts'

describe('durationInvestmentInMonth should return 0', () => {
  test('zero and empty string', () => {
    expect(durationInvestmentInMonth(0, '')).toEqual(0)
  })
  test('zero and random string', () => {
    expect(durationInvestmentInMonth(0, '434433')).toEqual(0)
  })
  test('NaN and empty string', () => {
    expect(durationInvestmentInMonth(NaN, '')).toEqual(0)
  })
  test('NaN and random string', () => {
    expect(durationInvestmentInMonth(NaN, '434433')).toEqual(0)
  })
  test('negative number and empty string', () => {
    expect(durationInvestmentInMonth(-55, '')).toEqual(0)
  })
  test('negative number and random string', () => {
    expect(durationInvestmentInMonth(-55, '32323')).toEqual(0)
  })
  test('positive number and empty string', () => {
    expect(durationInvestmentInMonth(55, '')).toEqual(0)
  })
  test('positive number and random string', () => {
    expect(durationInvestmentInMonth(55, '32323')).toEqual(0)
  })

  test('NaN and key sting', () => {
    expect(durationInvestmentInMonth(NaN, 'DurationInMonths')).toEqual(0)
  })
  test('0 and key sting', () => {
    expect(durationInvestmentInMonth(0, 'DurationInMonths')).toEqual(0)
  })
  test('negative number and key sting', () => {
    expect(durationInvestmentInMonth(-55, 'DurationInMonths')).toEqual(0)
  })
})

describe('Tests for duration calculation with option to select duration in months or years', () => {
  test('positive and duration in months', () => {
    expect(durationInvestmentInMonth(10, 'DurationInMonths')).toEqual(10)
  })
  test('positive and duration in months', () => {
    expect(durationInvestmentInMonth(10, 'DurationInYears')).toEqual(120)
  })
})
