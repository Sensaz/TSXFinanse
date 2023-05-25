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
  let initialDebtBalanceArray = []
  dispatch(resetArray('initialDebtBalanceArr'))

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArray = []
  dispatch(resetArray('interestArr'))

  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  let principalPaymentArray = []
  dispatch(resetArray('principalPaymentArr'))

  // Rata Płatności Kredytu
  let loanPayment = principalPayment + interest
  let loanPaymentArray = []
  dispatch(resetArray('loanPaymentArr'))

  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArray = []
  dispatch(resetArray('finalDebtBalanceArr'))

  initialDebtBalanceArray.push(initialDebtBalance)
  interestArray.push(interest)
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
    interest = initialDebtBalance * interestForBasePeriod
    interestArray = [...interestArray, interest]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPaymentArray = [...principalPaymentArray, principalPayment]
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
    loanPayment = principalPayment + interest
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

export default decreasingInstallmentsResults
