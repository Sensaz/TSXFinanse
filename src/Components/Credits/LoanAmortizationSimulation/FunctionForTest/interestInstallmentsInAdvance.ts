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
  let interestArray = []
  dispatch(resetArray('interestArr'))
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  let initialDebtBalanceArray = []
  dispatch(resetArray('initialDebtBalanceArr'))
  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  let principalPaymentArray = []
  dispatch(resetArray('principalPaymentArr'))
  // Rata Płatności Kredytu
  let loanPayment = loanValue / totalPaymentPeriods
  let loanPaymentArray = []
  dispatch(resetArray('loanPaymentArr'))
  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArray = []
  dispatch(resetArray('finalDebtBalanceArr'))

  interestArray.push(0)
  initialDebtBalanceArray.push(initialDebtBalance)
  principalPaymentArray.push(principalPayment)
  loanPaymentArray.push(loanPayment)
  finalDebtBalanceArray.push(finalDebtBalance)

  for (let n = 1; n < totalPaymentPeriods; n++) {
    // ---------------------------------
    // -- Saldo Początkowe Długu -------
    initialDebtBalance = initialDebtBalance - principalPayment
    initialDebtBalanceArray = [...initialDebtBalanceArray, initialDebtBalance]
    // ---------------------------------
    // -- Odsetki ----------------------
    interestArray = [...interestArray, 0]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPaymentArray = [...principalPaymentArray, principalPayment]
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
    loanPaymentArray = [...loanPaymentArray, loanPayment]
    // ---------------------------------
    // -- Saldo Końcowe Długu ----------
    finalDebtBalance = initialDebtBalance - principalPayment
    finalDebtBalanceArray = [...finalDebtBalanceArray, finalDebtBalance]
  }

  dispatch(
    updateArray({
      arrayType: 'initialDebtBalanceArr',
      value: initialDebtBalanceArray,
    })
  )
  dispatch(updateArray({ arrayType: 'interestArr', value: interestArray }))
  dispatch(
    updateArray({
      arrayType: 'principalPaymentArr',
      value: principalPaymentArray,
    })
  )
  dispatch(
    updateArray({ arrayType: 'loanPaymentArr', value: loanPaymentArray })
  )
  dispatch(
    updateArray({
      arrayType: 'finalDebtBalanceArr',
      value: finalDebtBalanceArray,
    })
  )

  return 1
}

export default interestInstallmentsInAdvance
