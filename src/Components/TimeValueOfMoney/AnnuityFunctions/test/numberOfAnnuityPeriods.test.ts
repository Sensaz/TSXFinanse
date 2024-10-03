// Funkcja do przeliczania lat na miesiące oraz dzielenia tego w zależności od jak często renta jest płacona wynik zaokrąglony w dół bez miejsc po przecinku

import numberOfAnnuityPeriods from '../numberOfAnnuityPeriods.ts'

describe('Function should result zero when', () => {
  test('duration is NaN', () => {
    expect(
      numberOfAnnuityPeriods(NaN, 'DurationInMonths', 'AnnuityAnnually')
    ).toEqual(0)
  })
  test('duration equal 0', () => {
    expect(
      numberOfAnnuityPeriods(0, 'DurationInMonths', 'AnnuityAnnually')
    ).toEqual(0)
  })
  test('duration is negative nubmer', () => {
    expect(
      numberOfAnnuityPeriods(-43, 'DurationInMonths', 'AnnuityAnnually')
    ).toEqual(0)
  })

  test('optionDuration is empty string', () => {
    expect(numberOfAnnuityPeriods(40, '', 'AnnuityAnnually')).toEqual(0)
  })
  test('optionDuration is random string', () => {
    expect(numberOfAnnuityPeriods(40, 'fdffdfd', 'AnnuityAnnually')).toEqual(0)
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
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityAnnually')
      ).toEqual(8)
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuitySemiAnnually')
      ).toEqual(16)
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityQuarterly')
      ).toEqual(33)
    })
    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInMonths', 'AnnuityMonthly')
      ).toEqual(100)
    })
  })

  describe('when optionDuration equal DurationInYears', () => {
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityAnnually')
      ).toEqual(100)
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuitySemiAnnually')
      ).toEqual(200)
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityQuarterly')
      ).toEqual(400)
    })
    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      expect(
        numberOfAnnuityPeriods(100, 'DurationInYears', 'AnnuityMonthly')
      ).toEqual(1200)
    })
  })
})
