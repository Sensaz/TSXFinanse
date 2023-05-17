import React from 'react'

const interestInstallmentsInAdvance = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number
) => {
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  let initialDebtBalanceArr: number[] = []
  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArr: number[] = []
  // Rata Kapitałowa
  let principalPayment = loanValue / totalPaymentPeriods
  let principalPaymentArr: number[] = []
  // Rata Płatności Kredytu
  let loanPayment = principalPayment + interest
  let loanPaymentArr: number[] = []
  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArr: number[] = []

  initialDebtBalanceArr.push(initialDebtBalance)
  interestArr.push(interest)
  principalPaymentArr.push(principalPayment)
  loanPaymentArr.push(loanPayment)
  finalDebtBalanceArr.push(finalDebtBalance)

  for (let n = 1; n < totalPaymentPeriods; n++) {
    // ---------------------------------
    // -- Saldo Początkowe Długu -------
    initialDebtBalance = initialDebtBalance - principalPayment
    initialDebtBalanceArr = [...initialDebtBalanceArr, initialDebtBalance]
    // ---------------------------------
    // -- Odsetki ----------------------
    interest = initialDebtBalance * interestForBasePeriod
    interestArr = [...interestArr, interest]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPaymentArr = [...principalPaymentArr, principalPayment]
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
    loanPayment = principalPayment + interest
    loanPaymentArr = [...loanPaymentArr, loanPayment]
    // ---------------------------------
    // -- Saldo Końcowe Długu ----------
    finalDebtBalance = initialDebtBalance - principalPayment
    finalDebtBalanceArr = [...finalDebtBalanceArr, finalDebtBalance]
  }

  const loanAmortizationCreditData = [
    initialDebtBalanceArr,
    interestArr,
    principalPaymentArr,
    loanPaymentArr,
    finalDebtBalanceArr,
  ]

  return loanAmortizationCreditData
}

export default interestInstallmentsInAdvance
