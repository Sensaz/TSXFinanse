import decreasingInstallmentsResults from './decreasingInstallmentsResults.ts'
import fixedInstallmentsResults from './fixedInstallmentsResults.ts'
import interestInstallmentsInAdvance from './interestInstallmentsInAdvance.ts'
import { Action, Dispatch } from '@reduxjs/toolkit'

const loanAmortizationCalc = (
  loanValue: number, // Wysokość Kredytu
  durationInMonths: number, // Czas Trwania W Miesiącach
  totalPaymentPeriods: number, // Łączna Liczba Okresów Bazowych
  basePeriodsPerYear: number, // Liczba Okresów Bazowych w roku
  interestForBasePeriod: number, // Oprocentowanie w okresie bazowym
  interestAccrualMethod: string, // Metoda Pobierania Odsetek Przez Bank
  loanRepaymentMethod: string, // Metoda Spłacania Kredytu
  dispatch: Dispatch<Action>
) => {
  if (
    loanValue <= 0 ||
    durationInMonths <= 0 ||
    totalPaymentPeriods <= 0 ||
    basePeriodsPerYear <= 0 ||
    (interestAccrualMethod !== 'InterestPaidInAdvance' &&
      interestAccrualMethod !== 'InterestPaidInArrears') ||
    (loanRepaymentMethod !== 'DecreasingInstallments' &&
      loanRepaymentMethod !== 'FixedInstallments')
  )
    return 0

  if (interestAccrualMethod === 'InterestPaidInAdvance')
    return interestInstallmentsInAdvance(
      loanValue,
      totalPaymentPeriods,
      dispatch
    )

  if (loanRepaymentMethod === 'DecreasingInstallments')
    return decreasingInstallmentsResults(
      loanValue,
      totalPaymentPeriods,
      interestForBasePeriod,
      dispatch
    )

  return fixedInstallmentsResults(
    loanValue,
    totalPaymentPeriods,
    interestForBasePeriod,
    dispatch
  )
}

export default loanAmortizationCalc
