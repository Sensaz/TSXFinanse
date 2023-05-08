// Funkcja do przeliczania lat na miesiące oraz dzielenia tego w zależności od jak często renta jest płacona wynik zaokrąglony w dół bez miejsc po przecinku

import numberOfAnnuityPeriods from '../FunctionForTest/numberOfAnnuityPeriods.ts'

describe('Function should result zero when', () => {
  test('duration equal NaN', () => {
    expect(
      numberOfAnnuityPeriods(NaN, 'DurationInMonths', 'AnnuityRecivedAnnually')
    ).toEqual(0)
  })
  test('duration equal 0', () => {
    expect(
      numberOfAnnuityPeriods(0, 'DurationInMonths', 'AnnuityRecivedAnnually')
    ).toEqual(0)
  })
  test('duration is negative nubmer', () => {
    expect(
      numberOfAnnuityPeriods(-43, 'DurationInMonths', 'AnnuityRecivedAnnually')
    ).toEqual(0)
  })

  test('optionDuration is empty string', () => {
    expect(numberOfAnnuityPeriods(40, '', 'AnnuityRecivedAnnually')).toEqual(0)
  })
  test('optionDuration is random string', () => {
    expect(
      numberOfAnnuityPeriods(40, 'fdffdfd', 'AnnuityRecivedAnnually')
    ).toEqual(0)
  })

  test('annuityCapitalization is random string', () => {
    expect(numberOfAnnuityPeriods(40, 'DurationInMonths', 'fdfdfd')).toEqual(0)
  })
  test('annuityCapitalization is empty string', () => {
    expect(numberOfAnnuityPeriods(40, 'DurationInMonths', '')).toEqual(0)
  })
})

describe('Funciton return added value when', () => {
  describe('when optionDuration equal DurationInMonths', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInMonths',
          'AnnuityRecivedAnnually'
        )
      ).toEqual(8)
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInMonths',
          'AnnuityRecivedSemiAnnually'
        )
      ).toEqual(16)
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInMonths',
          'AnnuityRecivedQuarterly'
        )
      ).toEqual(33)
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInMonths',
          'AnnuityRecivedMonthyly'
        )
      ).toEqual(100)
    })
  })

  describe('when optionDuration equal DurationInYears', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityRecivedAnnually')
      ).toEqual(100)
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInYears',
          'AnnuityRecivedSemiAnnually'
        )
      ).toEqual(200)
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInYears',
          'AnnuityRecivedQuarterly'
        )
      ).toEqual(400)
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityRecivedMonthyly')
      ).toEqual(1200)
    })
  })
})
