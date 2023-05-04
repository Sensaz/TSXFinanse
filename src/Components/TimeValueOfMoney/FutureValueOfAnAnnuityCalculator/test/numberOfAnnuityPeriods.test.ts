// Funkcja do przeliczania lat na miesiące oraz dzielenia tego w zależności od jak często renta jest płacona wynik zaokrąglony w dół bez miejsc po przecinku

import numberOfAnnuityPeriods from '../FunctionForTest/numberOfAnnuityPeriods.ts'

describe('Function should result zero when', () => {
  test('duration equal 0', () => {
    expect(
      numberOfAnnuityPeriods(0, 'DurationInMonths', 'AnnuityPaidAnnually')
    ).toEqual(0)
  })
  test('duration is negative nubmer', () => {
    expect(
      numberOfAnnuityPeriods(-43, 'DurationInMonths', 'AnnuityPaidAnnually')
    ).toEqual(0)
  })

  test('optionDuration is empty string', () => {
    expect(numberOfAnnuityPeriods(40, '', 'AnnuityPaidAnnually')).toEqual(0)
  })
  test('optionDuration is random string', () => {
    expect(
      numberOfAnnuityPeriods(40, 'fdffdfd', 'AnnuityPaidAnnually')
    ).toEqual(0)
  })

  test('annuityPaymentFrequency is random string', () => {
    expect(numberOfAnnuityPeriods(40, 'DurationInMonths', 'fdfdfd')).toEqual(0)
  })
  test('annuityPaymentFrequency is empty string', () => {
    expect(numberOfAnnuityPeriods(40, 'DurationInMonths', '')).toEqual(0)
  })
})

describe('Funciton return added value when', () => {
  describe('when optionDuration equal DurationInMonths', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityPaidAnnually')
      ).toEqual(8)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInMonths',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(16)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityPaidQuarterly')
      ).toEqual(33)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityPaidMonthyly')
      ).toEqual(100)
    })
  })

  describe('when optionDuration equal DurationInYears', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityPaidAnnually')
      ).toEqual(100)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'DurationInYears',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(200)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityPaidQuarterly')
      ).toEqual(400)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityPaidMonthyly')
      ).toEqual(1200)
    })
  })
})
