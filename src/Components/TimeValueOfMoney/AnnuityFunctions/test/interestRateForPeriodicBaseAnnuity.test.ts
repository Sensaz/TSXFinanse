// Roczne oprocentowanie renty / Renta płatna co
import interestRateForPeriodicBaseAnnuity from '../interestRateForPeriodicBaseAnnuity.ts'

describe('Function should result zero when', () => {
  test('interestRate is NaN', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(NaN, 'AnnuityPaidAnnually')
    ).toEqual(0)
  })
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
  test('annuityPaymentFrequency equal AnnuityAnnually', () => {
    expect(interestRateForPeriodicBaseAnnuity(100, 'AnnuityAnnually')).toEqual(
      1
    )
  })
  test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
    expect(
      interestRateForPeriodicBaseAnnuity(100, 'AnnuitySemiAnnually')
    ).toEqual(0.5)
  })
  test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
    expect(interestRateForPeriodicBaseAnnuity(100, 'AnnuityQuarterly')).toEqual(
      0.25
    )
  })
  test('annuityPaymentFrequency equal AnnuityMonthly', () => {
    expect(interestRateForPeriodicBaseAnnuity(100, 'AnnuityMonthly')).toEqual(
      0.08333333333333334
    )
  })
})
