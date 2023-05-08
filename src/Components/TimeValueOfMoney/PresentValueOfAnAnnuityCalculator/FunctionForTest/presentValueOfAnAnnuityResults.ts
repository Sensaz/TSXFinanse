import interestRateForPeriodicBaseAnnuity from './interestRateForPeriodicBaseAnnuity'
// parseRequiredInterestRate: number,
// annuityCapitalization: string

import numberOfAnnuityPeriods from './numberOfAnnuityPeriods'
// parseDuration: number,
// optionDuration: string,
// annuityCapitalization: string

type ResultCompoundInterestCalculateType = {
  presentValue: number
  parsedExpectedFinalValue: number
  accruedInterest: number
}

const presentValueOfAnAnnuityResults = (
  expectedAnnuity: number, // Oczekiwana renta
  duration: number, // Czas Trwania
  requiredInterestRate: number, // Wymagana Stopa zwrotu
  annuityRecived: string, // Renta Otrzymywana z
  optionDuration: string, // Czas Trwania podany w
  annuityCapitalization: string, // Renta otrzymywana co
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  const interestRateForPeriodicBaseAnnuityResult =
    interestRateForPeriodicBaseAnnuity(
      requiredInterestRate,
      annuityCapitalization
    )
  const numberOfAnnuityPeriodsResult = numberOfAnnuityPeriods(
    duration,
    optionDuration,
    annuityCapitalization
  )

  if (
    expectedAnnuity <= 0 ||
    isNaN(expectedAnnuity) ||
    numberOfAnnuityPeriodsResult <= 0 ||
    interestRateForPeriodicBaseAnnuityResult <= 0 ||
    (annuityRecived !== 'AnnuityPaidInAdvance' &&
      annuityRecived !== 'AnnuityPayableInAdvance')
  )
    return propsSetResultCompoundInterestCalculate({
      presentValue: 0,
      parsedExpectedFinalValue: 0,
      accruedInterest: 0,
    })

  const presentValueOfAnAnnuityMultiplier =
    (1 -
      1 /
        Math.pow(
          1 + interestRateForPeriodicBaseAnnuityResult,
          numberOfAnnuityPeriodsResult
        )) /
    interestRateForPeriodicBaseAnnuityResult

  let presentValue = expectedAnnuity * presentValueOfAnAnnuityMultiplier

  let parsedExpectedFinalValue = expectedAnnuity * numberOfAnnuityPeriodsResult

  let accruedInterest =
    expectedAnnuity * numberOfAnnuityPeriodsResult - presentValue

  if (annuityRecived === 'AnnuityPaidInAdvance') {
    presentValue =
      expectedAnnuity *
      (1 + interestRateForPeriodicBaseAnnuityResult) *
      presentValueOfAnAnnuityMultiplier

    parsedExpectedFinalValue = expectedAnnuity * numberOfAnnuityPeriodsResult

    accruedInterest =
      expectedAnnuity * numberOfAnnuityPeriodsResult - presentValue

    return propsSetResultCompoundInterestCalculate({
      presentValue,
      parsedExpectedFinalValue,
      accruedInterest,
    })
  }

  return propsSetResultCompoundInterestCalculate({
    presentValue,
    parsedExpectedFinalValue,
    accruedInterest,
  })
}

export default presentValueOfAnAnnuityResults
