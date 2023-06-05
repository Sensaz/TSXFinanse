import numberOfBasePeriodsResult from '../numberOfBasePeriodsResult'

describe('numberOfBasePeriodsResult return two zero when', () => {
  test('paymentPeriodOfInstallment is empty string', () => {
    expect(numberOfBasePeriodsResult('pizza', 15)).toEqual({
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    })
  })
  test('paymentPeriodOfInstallment is random string', () => {
    expect(numberOfBasePeriodsResult('pizza', 15)).toEqual({
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    })
  })
  test('durationInMonths is equal 0', () => {
    expect(numberOfBasePeriodsResult('DurationInHalfYears', 0)).toEqual({
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    })
  })
  test('durationInMonths is negative number', () => {
    expect(numberOfBasePeriodsResult('DurationInHalfYears', -5)).toEqual({
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    })
  })
  test('durationInMonths is NaN', () => {
    expect(numberOfBasePeriodsResult('DurationInHalfYears', NaN)).toEqual({
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    })
  })
})

describe('numberOfBasePeriodsResult return two zero when', () => {
  test('DurationInYears is equal DurationInYears', () => {
    expect(numberOfBasePeriodsResult('DurationInYears', 24)).toEqual({
      totalPaymentPeriods: 2,
      basePeriodsPerYear: 1,
    })
  })
  test('DurationInYears is equal DurationInHalfYears', () => {
    expect(numberOfBasePeriodsResult('DurationInHalfYears', 24)).toEqual({
      totalPaymentPeriods: 4,
      basePeriodsPerYear: 2,
    })
  })
  test('DurationInYears is equal DurationInQarters', () => {
    expect(numberOfBasePeriodsResult('DurationInQarters', 24)).toEqual({
      totalPaymentPeriods: 8,
      basePeriodsPerYear: 4,
    })
  })
  test('DurationInYears is equal DurationInMonths', () => {
    expect(numberOfBasePeriodsResult('DurationInMonths', 24)).toEqual({
      totalPaymentPeriods: 24,
      basePeriodsPerYear: 12,
    })
  })
})
