// Funkcja do przeliczania lat na miesiące oraz dzielenia tego w zależności od jak często renta jest płacona wynik zaokrąglony w dół bez miejsc po przecinku

// // Czas trwania renty x number - duration

// // Renta płatna z (AnnuityPaidInAdvance, AnnuityPayableInAdvance) - annuityPaymentOption

// Podany W (DurationInMonths or DurationInYears) - optionDuration

// Renta płatna co (AnnuityPaidAnnually or AnnuityPaidSemiAnnually or AnnuityPaidQuarterly or AnnuityPaidMonthyly) - annuityPaymentFrequency

import numberOfAnnuityPeriods from '../FunctionForTest/numberOfAnnuityPeriods.ts'

describe('Function should result three zero when', () => {
  test('duration equal 0', () => {
    expect(
      numberOfAnnuityPeriods(
        0,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityPaidAnnually'
      )
    ).toEqual(0)
  })
  test('duration is negative nubmer', () => {
    expect(
      numberOfAnnuityPeriods(
        -43,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityPaidAnnually'
      )
    ).toEqual(0)
  })

  test('AnnuityPaymentOption is random string', () => {
    expect(
      numberOfAnnuityPeriods(
        40,
        'fdsr45v',
        'DurationInMonths',
        'AnnuityPaidAnnually'
      )
    ).toEqual(0)
  })
  test('AnnuityPaymentOption is empty string', () => {
    expect(
      numberOfAnnuityPeriods(40, '', 'DurationInMonths', 'AnnuityPaidAnnually')
    ).toEqual(0)
  })

  test('AnnuityPaymentOption is random string', () => {
    expect(
      numberOfAnnuityPeriods(
        40,
        'AnnuityPaidInAdvance',
        'fdfsdfs',
        'AnnuityPaidAnnually'
      )
    ).toEqual(0)
  })

  test('optionDuration is empty string', () => {
    expect(
      numberOfAnnuityPeriods(
        40,
        'AnnuityPaidInAdvance',
        '',
        'AnnuityPaidAnnually'
      )
    ).toEqual(0)
  })

  test('annuityPaymentFrequency is random string', () => {
    expect(
      numberOfAnnuityPeriods(
        40,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'fdfdfd'
      )
    ).toEqual(0)
  })
  test('annuityPaymentFrequency is empty string', () => {
    expect(
      numberOfAnnuityPeriods(40, 'AnnuityPaidInAdvance', 'DurationInMonths', '')
    ).toEqual(0)
  })
})

describe('Funciton return added value when', () => {
  describe('when annuityPaymentOption equal AnnuityPaidInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInMonths',
          'AnnuityPaidAnnually'
        )
      ).toEqual(9)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInMonths',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(17)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInMonths',
          'AnnuityPaidQuarterly'
        )
      ).toEqual(26)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInMonths',
          'AnnuityPaidMonthyly'
        )
      ).toEqual(101)
    })
  })
  describe('when annuityPaymentOption equal AnnuityPayableInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInMonths',
          'AnnuityPaidAnnually'
        )
      ).toEqual(8)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInMonths',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(16)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInMonths',
          'AnnuityPaidQuarterly'
        )
      ).toEqual(25)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInMonths',
          'AnnuityPaidMonthyly'
        )
      ).toEqual(100)
    })
  })

  describe('when annuityPaymentOption equal AnnuityPaidInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInYears',
          'AnnuityPaidAnnually'
        )
      ).toEqual(101)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInYears',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(201)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInYears',
          'AnnuityPaidQuarterly'
        )
      ).toEqual(301)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPaidInAdvance',
          'DurationInYears',
          'AnnuityPaidMonthyly'
        )
      ).toEqual(1201)
    })
  })

  describe('when annuityPaymentOption equal AnnuityPayableInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInYears',
          'AnnuityPaidAnnually'
        )
      ).toEqual(100)
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInYears',
          'AnnuityPaidSemiAnnually'
        )
      ).toEqual(200)
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInYears',
          'AnnuityPaidQuarterly'
        )
      ).toEqual(300)
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      expect(
        numberOfAnnuityPeriods(
          100,
          'AnnuityPayableInAdvance',
          'DurationInYears',
          'AnnuityPaidMonthyly'
        )
      ).toEqual(1200)
    })
  })
})
