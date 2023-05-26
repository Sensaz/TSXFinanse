import { Action, Dispatch } from '@reduxjs/toolkit'
import pushResultToRedux from './pushResultToRedux.ts'

const interestInstallmentsInAdvance = (
  loanValue: number,
  totalPaymentPeriods: number,
  dispatch: Dispatch<Action>
) => {
  // Odsetki
  let interestArray = [0]
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  let initialDebtBalanceArray = [initialDebtBalance]
  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  let principalPaymentArray = [principalPayment]
  // Rata Płatności Kredytu
  let loanPayment = loanValue / totalPaymentPeriods
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

export default interestInstallmentsInAdvance
