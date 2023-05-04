import interestRateForPeriodicBaseAnnuity from './interestRateForPeriodicBaseAnnuity'
// parsedInterestRate: number,
// annuityPaymentFrequency: string

import numberOfAnnuityPeriods from './numberOfAnnuityPeriods'
// parsedDuration: number,
// optionDuration: string,
// annuityPaymentFrequency: string

type ResultCompoundInterestCalculateType = {
  parsedPensionAmount: any
  investmentResult: any
  accruedInterest: any
}

const futureValueOfAnnuityFunction = (
  pensionAmount: string,
  duration: string,
  interestRate: string,
  optionDuration: string,
  annuityPaymentOption: string,
  annuityPaymentFrequency: string,
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  console.log(optionDuration, annuityPaymentOption, annuityPaymentFrequency)
  const parsePensionAmount = parseFloat(pensionAmount)
  const parseDuration = parseFloat(duration)
  const parseInterestRate = parseFloat(interestRate)
  const resultInterestRateForPeriodicBaseAnnuity =
    interestRateForPeriodicBaseAnnuity(
      parseInterestRate,
      annuityPaymentFrequency
    )
  const resultNumberOfAnnuityPeriods = numberOfAnnuityPeriods(
    parseDuration,
    optionDuration,
    annuityPaymentFrequency
  )

  if (
    parsePensionAmount <= 0 ||
    parseDuration <= 0 ||
    parseInterestRate <= 0 ||
    resultInterestRateForPeriodicBaseAnnuity <= 0 ||
    resultNumberOfAnnuityPeriods <= 0
  )
    return propsSetResultCompoundInterestCalculate({
      parsedPensionAmount: 0,
      investmentResult: 0,
      accruedInterest: 0,
    })

  const futureAnnuityValueMultiplier =
    (Math.pow(
      1 + resultInterestRateForPeriodicBaseAnnuity,
      resultNumberOfAnnuityPeriods
    ) -
      1) /
    resultInterestRateForPeriodicBaseAnnuity

  if (annuityPaymentOption === 'AnnuityPaidInAdvance') {
    const investmentResult =
      parsePensionAmount *
      (1 + resultInterestRateForPeriodicBaseAnnuity) *
      futureAnnuityValueMultiplier

    const parsedToStringPensionAmount = (
      parsePensionAmount * resultNumberOfAnnuityPeriods
    ).toFixed(2)

    const parsedToStringAccruedInterest = (
      investmentResult -
      parsePensionAmount * resultNumberOfAnnuityPeriods
    ).toFixed(2)

    return propsSetResultCompoundInterestCalculate({
      parsedPensionAmount: parsedToStringPensionAmount,
      investmentResult: investmentResult.toFixed(2),
      accruedInterest: parsedToStringAccruedInterest,
    })
  }

  const investmentResult = parsePensionAmount * futureAnnuityValueMultiplier

  return propsSetResultCompoundInterestCalculate({
    parsedPensionAmount: (
      parsePensionAmount * resultNumberOfAnnuityPeriods
    ).toFixed(2),
    investmentResult: investmentResult.toFixed(2),
    accruedInterest: (
      investmentResult -
      parsePensionAmount * resultNumberOfAnnuityPeriods
    ).toFixed(2),
  })
}

export default futureValueOfAnnuityFunction
