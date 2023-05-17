const decreasingInstallmentsResults = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number
) => {
  // Odsetki
  let interest = loanValue * interestForBasePeriod * totalPaymentPeriods
  let interestArr: number[] = []
  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue - interest
  let initialDebtBalanceArr: number[] = []
  // Rata Kapitałowa
  let principalPayment = initialDebtBalance / totalPaymentPeriods
  let principalPaymentArr: number[] = []
  // Rata Płatności Kredytu
  let loanPayment = initialDebtBalance / totalPaymentPeriods
  let loanPaymentArr: number[] = []
  // Saldo Końcowe Długu
  let finalDebtBalance = initialDebtBalance - principalPayment
  let finalDebtBalanceArr: number[] = []

  initialDebtBalanceArr.push(initialDebtBalance)
  interestArr.push(0)
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
    interestArr = [...interestArr, 0]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
    principalPaymentArr = [...principalPaymentArr, principalPayment]
    // ---------------------------------
    // -- Rata Płatności Kredytu -------
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

export default decreasingInstallmentsResults
