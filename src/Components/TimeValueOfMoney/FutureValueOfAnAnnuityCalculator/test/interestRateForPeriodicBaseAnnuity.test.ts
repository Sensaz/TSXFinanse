// Roczne oprocentowanie renty / Renta płatna co
import interestRateForPeriodicBaseAnnuity from '../FunctionForTest/interestRateForPeriodicBaseAnnuity.ts'

describe('Function should result zero when', () => {
  test('interestRate equal 0', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(0, 'AnnuityPaidAnnually')
    ).toEqual(0)
  })
  test('interestRate equal negative number', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(-42, 'AnnuityPaidAnnually')
    ).toEqual(0)
  })
  test('annuityPaymentFrequency equal empty string', () => {
    expect(interestRateForPeriodicBaseAnnuity(1, '')).toEqual(0)
  })
  test('annuityPaymentFrequency equal random string', () => {
    expect(interestRateForPeriodicBaseAnnuity(1, 'fdasfasfafa')).toEqual(0)
  })
})

describe('Function should result positive number when', () => {
  test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(100, 'AnnuityPaidAnnually')
    ).toEqual(1)
  })
  test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(100, 'AnnuityPaidSemiAnnually')
    ).toEqual(0.5)
  })
  test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(100, 'AnnuityPaidQuarterly')
    ).toEqual(0.25)
  })
  test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(100, 'AnnuityPaidMonthyly')
    ).toEqual(0.08333333333333334)
  })
})
