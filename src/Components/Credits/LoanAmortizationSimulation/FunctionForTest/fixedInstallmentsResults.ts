import { Action, Dispatch } from '@reduxjs/toolkit'
import pushResultToRedux from './pushResultToRedux.ts'

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
  let initialDebtBalanceArray = [initialDebtBalance]

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArray = [interest]

  // Rata Płatności Kredytu
  let loanPayment = loanValue / presentValueAnnuityFactor
  let loanPaymentArray = [loanPayment]

  // Rata Kapitałowa
  let principalPayment = loanPayment - interest
  let principalPaymentArray = [principalPayment]

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

export default fixedInstallmentsResults
