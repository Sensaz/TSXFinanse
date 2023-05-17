const fixedInstallmentsResults = (
  loanValue: number,
  totalPaymentPeriods: number,
  interestForBasePeriod: number
) => {
  // Mnożnik Wartości Bierzącej Renty
  const presentValueAnnuityFactor =
    (1 - 1 / Math.pow(1 + interestForBasePeriod, totalPaymentPeriods)) /
    interestForBasePeriod

  // Saldo Początkowe Długu
  let initialDebtBalance = loanValue
  let initialDebtBalanceArr: number[] = []

  // Odsetki
  let interest = initialDebtBalance * interestForBasePeriod
  let interestArr: number[] = []

  // Rata Płatności Kredytu
  let loanPayment = loanValue / presentValueAnnuityFactor
  let loanPaymentArr: number[] = []

  // Rata Kapitałowa
  let principalPayment = loanPayment - interest
  let principalPaymentArr: number[] = []

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
    // -- Rata Płatności Kredytu -------
    principalPayment = loanPayment - interest
    principalPaymentArr = [...principalPaymentArr, principalPayment]
    // ---------------------------------
    // -- Rata Kapitałowa --------------
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

export default fixedInstallmentsResults
