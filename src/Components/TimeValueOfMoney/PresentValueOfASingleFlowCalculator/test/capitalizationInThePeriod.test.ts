import capitalizationInThePeriod from '../FunctionForTest/capitalizationInThePeriod.ts'

describe('capitalizationInThePeriod should return an object with a capitalization of 1 and result of 0', () => {
  test('zero and empty string', () => {
    expect(capitalizationInThePeriod(0, '')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty random string', () => {
    expect(capitalizationInThePeriod(0, '12fdsfs33')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: AnnualCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'AnnualCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: SemiAnnualCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'SemiAnnualCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: QuarterlyCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'QuarterlyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: MonthlyCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'MonthlyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: DailyCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'DailyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('zero and empty key string: ContinuousCapitalization', () => {
    expect(capitalizationInThePeriod(0, 'ContinuousCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and empty string', () => {
    expect(capitalizationInThePeriod(-55, '')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and random string', () => {
    expect(capitalizationInThePeriod(-55, 'fdsafsfdsa')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: AnnualCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'AnnualCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: SemiAnnualCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'SemiAnnualCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: QuarterlyCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'QuarterlyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: MonthlyCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'MonthlyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: DailyCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'DailyCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('negative number and key string: ContinuousCapitalization', () => {
    expect(capitalizationInThePeriod(-55, 'ContinuousCapitalization')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('positive number and empty string', () => {
    expect(capitalizationInThePeriod(42, '')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
  test('positive number and random string', () => {
    expect(capitalizationInThePeriod(42, 'fdfasfasff')).toEqual({
      result: 0,
      capitalization: 1,
    })
  })
})

describe('capitalizationInThePeriod should correct object', () => {
  test('number 100 and AnnualCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'AnnualCapitalization')).toEqual({
      result: 1,
      capitalization: 1,
    })
  })
  test('number 100 and SemiAnnualCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'SemiAnnualCapitalization')).toEqual({
      result: 0.5,
      capitalization: 2,
    })
  })
  test('number 100 and QuarterlyCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'QuarterlyCapitalization')).toEqual({
      result: 0.25,
      capitalization: 4,
    })
  })
  test('number 100 and MonthlyCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'MonthlyCapitalization')).toEqual({
      result: 0.08333333333333334,
      capitalization: 12,
    })
  })
  test('number 100 and DailyCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'DailyCapitalization')).toEqual({
      result: 0.00273972602739726027397260273973,
      capitalization: 365,
    })
  })
  test('number 100 and ContinuousCapitalization', () => {
    expect(capitalizationInThePeriod(100, 'ContinuousCapitalization')).toEqual({
      result: 0.36787944117144233,
      capitalization: 2.7182818284590452353602874713527,
    })
  })
})
