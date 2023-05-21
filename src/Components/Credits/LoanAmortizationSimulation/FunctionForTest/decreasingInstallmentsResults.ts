import {
  updateArray,
  resetArray,
} from '../loanSimulationAmortizationTableState.ts'
import { Action, Dispatch } from '@reduxjs/toolkit'

const decreasingInstallmentsResults = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number,
  dispatch: Dispatch<Action>
) => {
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  dispatch(resetArray('initialDebtBalanceArr'))

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  dispatch(resetArray('interestArr'))

  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  dispatch(resetArray('principalPaymentArr'))

  // Rata Płatności Kredytu
  let loanPayment = principalPayment + interest
  dispatch(resetArray('loanPaymentArr'))

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
    // -- Rata Kapitałowa --------------
    dispatch(
      updateArray({ arrayType: 'principalPaymentArr', value: principalPayment })
    )
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
    loanPayment = principalPayment + interest
    dispatch(updateArray({ arrayType: 'loanPaymentArr', value: loanPayment }))
    // ---------------------------------
    // -- Saldo Końcowe Długu ----------
    finalDebtBalance = initialDebtBalance - principalPayment
    dispatch(
      updateArray({ arrayType: 'finalDebtBalanceArr', value: finalDebtBalance })
    )
  }

  return 1
}

export default decreasingInstallmentsResults
