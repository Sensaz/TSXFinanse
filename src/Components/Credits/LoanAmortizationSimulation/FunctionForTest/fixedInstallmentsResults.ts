import {
  updateArray,
  resetArray,
} from '../loanSimulationAmortizationTableState.ts'
import { Action, Dispatch } from '@reduxjs/toolkit'

const fixedInstallmentsResults = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number,
  dispatch: Dispatch<Action>
) => {
  // Mnożnik Wartości Bierzącej Renty
  const presentValueAnnuityFactor =
    (1 - 1 / Math.pow(1 + interestForBasePeriod, totalPaymentPeriods)) /
    interestForBasePeriod

  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  dispatch(resetArray('initialDebtBalanceArr'))

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  dispatch(resetArray('interestArr'))

  // Rata Płatności Kredytu
  let loanPayment = loanValue / presentValueAnnuityFactor
  dispatch(resetArray('loanPaymentArr'))

  // Rata Kapitałowa
  let principalPayment = loanPayment - interest
  dispatch(resetArray('principalPaymentArr'))

  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  dispatch(resetArray('finalDebtBalanceArr'))

  dispatch(
    updateArray({
      arrayType: 'initialDebtBalanceArr',
      value: initialDebtBalance,
    })
  )
  dispatch(updateArray({ arrayType: 'interestArr', value: interest }))
  dispatch(
    updateArray({ arrayType: 'principalPaymentArr', value: principalPayment })
  )
  dispatch(updateArray({ arrayType: 'loanPaymentArr', value: loanPayment }))
  dispatch(
    updateArray({ arrayType: 'finalDebtBalanceArr', value: finalDebtBalance })
  )

  for (let n = 1; n < totalPaymentPeriods; n++) {
    // ---------------------------------
    // -- Saldo Początkowe Długu -------
    initialDebtBalance = initialDebtBalance - principalPayment
    dispatch(
      updateArray({
        arrayType: 'initialDebtBalanceArr',
        value: initialDebtBalance,
      })
    )
    // ---------------------------------
    // -- Odsetki ----------------------
    interest = initialDebtBalance * interestForBasePeriod
    dispatch(updateArray({ arrayType: 'interestArr', value: interest }))
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
    dispatch(updateArray({ arrayType: 'loanPaymentArr', value: loanPayment }))
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPayment = loanPayment - interest
    dispatch(
      updateArray({ arrayType: 'principalPaymentArr', value: principalPayment })
    )
    // ---------------------------------
    // -- Saldo Końcowe Długu ----------
    finalDebtBalance = initialDebtBalance - principalPayment
    dispatch(
      updateArray({ arrayType: 'finalDebtBalanceArr', value: finalDebtBalance })
    )
  }

  return 1
}

export default fixedInstallmentsResults
