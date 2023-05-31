import { Action, Dispatch } from '@reduxjs/toolkit'
import pushResultToRedux from './pushResultToRedux.ts'

const decreasingInstallmentsResults = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number,
  dispatch: Dispatch<Action>
) => {
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  let initialDebtBalanceArray = [initialDebtBalance]

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArray = [interest]

  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  let principalPaymentArray = [principalPayment]

  // Rata Płatności Kredytu
  let loanPayment = principalPayment + interest
  let loanPaymentArray = [loanPayment]

  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArray = [finalDebtBalance]

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

  pushResultToRedux(
    dispatch,
    initialDebtBalanceArray,
    interestArray,
    principalPaymentArray,
    loanPaymentArray,
    finalDebtBalanceArray
  )

  return 1
}

export default decreasingInstallmentsResults
