import { Action, Dispatch } from '@reduxjs/toolkit'
import {
  updateArray,
  resetArray,
} from '../loanSimulationAmortizationTableState.ts'

const interestInstallmentsInAdvance = (
  loanValue: number,
  totalPaymentPeriods: number,
  dispatch: Dispatch<Action>
) => {
  // Odsetki
  dispatch(resetArray('interestArr'))
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  dispatch(resetArray('initialDebtBalanceArr'))
  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  dispatch(resetArray('principalPaymentArr'))
  // Rata Płatności Kredytu
  let loanPayment = loanValue / totalPaymentPeriods
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
  dispatch(updateArray({ arrayType: 'interestArr', value: 0 }))
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
    dispatch(updateArray({ arrayType: 'interestArr', value: 0 }))
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    dispatch(
      updateArray({ arrayType: 'principalPaymentArr', value: principalPayment })
    )
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
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

export default interestInstallmentsInAdvance
