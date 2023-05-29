import { Action, Dispatch } from '@reduxjs/toolkit'
import decreasingInstallmentsResults from './decreasingInstallmentsResults.ts'
import fixedInstallmentsResults from './fixedInstallmentsResults.ts'
import interestInstallmentsInAdvance from './interestInstallmentsInAdvance.ts'
import { resetArray } from '../loanSimulationAmortizationTableState.ts'

const loanAmortizationCalc = (
  loanValue: number, // Wysokość Kredytu
  durationInMonths: number, // Czas Trwania W Miesiącach
  totalPaymentPeriods: number, // Łączna Liczba Okresów Bazowych
  basePeriodsPerYear: number, // Liczba Okresów Bazowych w roku
  interestForBasePeriod: number, // Oprocentowanie w okresie bazowym
  interestAccrualMethod: string, // Metoda Pobierania Odsetek Przez Bank
  loanRepaymentMethod: string, // Metoda Spłacania Kredytu
  doesTheBankChargeACommission: string, // Czy bank pobiera prowizje
  dispatch: Dispatch<Action>
) => {
  if (
    loanValue <= 0 ||
    isNaN(loanValue) ||
    durationInMonths <= 0 ||
    isNaN(durationInMonths) ||
    totalPaymentPeriods <= 0 ||
    isNaN(totalPaymentPeriods) ||
    basePeriodsPerYear <= 0 ||
    isNaN(basePeriodsPerYear) ||
    (interestAccrualMethod !== 'InterestPaidInAdvance' &&
      interestAccrualMethod !== 'InterestPaidInArrears') ||
    (loanRepaymentMethod !== 'DecreasingInstallments' &&
      loanRepaymentMethod !== 'FixedInstallments') ||
    (doesTheBankChargeACommission !== 'ChargesAFee' &&
      doesTheBankChargeACommission !== 'DoesNotChargeAFee')
  ) {
    dispatch(resetArray('interestArr'))
    dispatch(resetArray('initialDebtBalanceArr'))
    dispatch(resetArray('principalPaymentArr'))
    dispatch(resetArray('loanPaymentArr'))
    dispatch(resetArray('finalDebtBalanceArr'))
    return
  }

  // TODO: Jak mam napisać testy do tych 3 funkcji poniżej?

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
