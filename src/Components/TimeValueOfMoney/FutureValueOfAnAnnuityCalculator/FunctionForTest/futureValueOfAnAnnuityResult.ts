import interestRateForPeriodicBaseAnnuity from './interestRateForPeriodicBaseAnnuity'

import numberOfAnnuityPeriods from './numberOfAnnuityPeriods'

type ResultCompoundInterestCalculateType = {
  pensionAmount: number
  investmentResult: number
  accruedInterest: number
}

const futureValueOfAnnuityFunction = (
  propsPensionAmount: number,
  duration: number,
  interestRate: number,
  optionDuration: string,
  annuityPaymentOption: string,
  annuityPaymentFrequency: string,
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  const resultInterestRateForPeriodicBaseAnnuity =
    interestRateForPeriodicBaseAnnuity(interestRate, annuityPaymentFrequency)
  const resultNumberOfAnnuityPeriods = numberOfAnnuityPeriods(
    duration,
    optionDuration,
    annuityPaymentFrequency
  )
  if (
    propsPensionAmount <= 0 ||
    duration <= 0 ||
    interestRate <= 0 ||
    annuityPaymentOption === '' ||
    resultInterestRateForPeriodicBaseAnnuity <= 0 ||
    resultNumberOfAnnuityPeriods <= 0
  )
    return propsSetResultCompoundInterestCalculate({
      investmentResult: 0,
      pensionAmount: 0,
      accruedInterest: 0,
    })

  const futureAnnuityValueMultiplier =
    (Math.pow(
      1 + resultInterestRateForPeriodicBaseAnnuity,
      resultNumberOfAnnuityPeriods
    ) -
      1) /
    resultInterestRateForPeriodicBaseAnnuity

  let pensionAmount = propsPensionAmount * resultNumberOfAnnuityPeriods
  let investmentResult = propsPensionAmount * futureAnnuityValueMultiplier
  let accruedInterest =
    investmentResult - propsPensionAmount * resultNumberOfAnnuityPeriods

  if (annuityPaymentOption === 'AnnuityPaidInAdvance') {
    pensionAmount = propsPensionAmount * resultNumberOfAnnuityPeriods

    investmentResult =
      propsPensionAmount *
      (1 + resultInterestRateForPeriodicBaseAnnuity) *
      futureAnnuityValueMultiplier

    accruedInterest =
      investmentResult - propsPensionAmount * resultNumberOfAnnuityPeriods

    return propsSetResultCompoundInterestCalculate({
      investmentResult,
      pensionAmount,
      accruedInterest,
    })
  }

  return propsSetResultCompoundInterestCalculate({
    investmentResult,
    pensionAmount,
    accruedInterest,
  })
}

export default futureValueOfAnnuityFunction
