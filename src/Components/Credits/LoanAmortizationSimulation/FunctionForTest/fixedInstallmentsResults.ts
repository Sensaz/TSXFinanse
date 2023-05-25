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
  let initialDebtBalanceArray = []
  dispatch(resetArray('initialDebtBalanceArr'))

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArray = []
  dispatch(resetArray('interestArr'))

  // Rata Płatności Kredytu
  let loanPayment = loanValue / presentValueAnnuityFactor
  let loanPaymentArray = []
  dispatch(resetArray('loanPaymentArr'))

  // Rata Kapitałowa
  let principalPayment = loanPayment - interest
  let principalPaymentArray = []
  dispatch(resetArray('principalPaymentArr'))

  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArray = []
  dispatch(resetArray('finalDebtBalanceArr'))

  initialDebtBalanceArray.push(initialDebtBalance)
  interestArray.push(interest)
  loanPaymentArray.push(loanPayment)
  principalPaymentArray.push(principalPayment)
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
    // -- Rata Płatności Kredytu -------
    loanPaymentArray = [...loanPaymentArray, loanPayment]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPayment = loanPayment - interest
    principalPaymentArray = [...principalPaymentArray, principalPayment]
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

export default fixedInstallmentsResults
