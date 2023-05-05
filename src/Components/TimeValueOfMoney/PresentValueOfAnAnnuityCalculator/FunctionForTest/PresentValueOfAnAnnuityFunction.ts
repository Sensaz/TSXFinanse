import interestRateForPeriodicBaseAnnuity from './interestRateForPeriodicBaseAnnuity'
// parseRequiredInterestRate: number,
// annuityCapitalization: string

import numberOfAnnuityPeriods from './numberOfAnnuityPeriods'
// parseDuration: number,
// optionDuration: string,
// annuityCapitalization: string

type ResultCompoundInterestCalculateType = {
  presentValue: any
  parsedExpectedFinalValue: any
  accruedInterest: any
}

const PresentValueOfAnAnnuityFunction = (
  expectedAnnuity: string, // Oczekiwana renta
  duration: string, // Czas Trwania
  requiredInterestRate: string, // Wymagana Stopa zwrotu
  annuityRecived: string, // Renta Otrzymywana z
  optionDuration: string, // Czas Trwania podany w
  annuityCapitalization: string, // Renta otrzymywana co
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  const parseExpectedAnnuity = parseFloat(expectedAnnuity)
  const parseDuration = parseFloat(duration)
  const parseRequiredInterestRate = parseFloat(requiredInterestRate)

  const interestRateForPeriodicBaseAnnuityResult =
    interestRateForPeriodicBaseAnnuity(
      parseRequiredInterestRate,
      annuityCapitalization
    )
  const numberOfAnnuityPeriodsResult = numberOfAnnuityPeriods(
    parseDuration,
    optionDuration,
    annuityCapitalization
  )

  if (
    !parseExpectedAnnuity ||
    !numberOfAnnuityPeriodsResult ||
    !interestRateForPeriodicBaseAnnuityResult ||
    (annuityRecived !== 'AnnuityPaidInAdvance' &&
      annuityRecived !== 'AnnuityPayableInAdvance')
  )
    return propsSetResultCompoundInterestCalculate({
      presentValue: 0,
      parsedExpectedFinalValue: 0,
      accruedInterest: 0,
    })

  const futureValueAnnuityFactor =
    (1 -
      1 /
        Math.pow(
          1 + interestRateForPeriodicBaseAnnuityResult,
          numberOfAnnuityPeriodsResult
        )) /
    interestRateForPeriodicBaseAnnuityResult

  const PV = parseExpectedAnnuity * futureValueAnnuityFactor

  let checkParsedExpectedFinalValueResult =
    parseExpectedAnnuity * numberOfAnnuityPeriodsResult <= 0
      ? 0
      : (parseExpectedAnnuity * numberOfAnnuityPeriodsResult).toFixed(2)

  let checkAccruedInterestResult =
    parseExpectedAnnuity * numberOfAnnuityPeriodsResult - PV <= 0
      ? 0
      : (parseExpectedAnnuity * numberOfAnnuityPeriodsResult - PV).toFixed(2)

  if (annuityRecived === 'AnnuityPaidInAdvance') {
    const PV =
      parseExpectedAnnuity *
        (1 + interestRateForPeriodicBaseAnnuityResult) *
        futureValueAnnuityFactor <=
      0
        ? 0
        : parseExpectedAnnuity *
          (1 + interestRateForPeriodicBaseAnnuityResult) *
          futureValueAnnuityFactor

    checkParsedExpectedFinalValueResult =
      parseExpectedAnnuity * numberOfAnnuityPeriodsResult <= 0
        ? 0
        : (parseExpectedAnnuity * numberOfAnnuityPeriodsResult).toFixed(2)

    checkAccruedInterestResult =
      parseExpectedAnnuity * numberOfAnnuityPeriodsResult - PV <= 0
        ? 0
        : (parseExpectedAnnuity * numberOfAnnuityPeriodsResult - PV).toFixed(2)

    return propsSetResultCompoundInterestCalculate({
      presentValue: PV.toFixed(2),
      parsedExpectedFinalValue: checkParsedExpectedFinalValueResult,
      accruedInterest: checkAccruedInterestResult,
    })
  }

  console.log(PV)
  return propsSetResultCompoundInterestCalculate({
    presentValue: PV.toFixed(2),
    parsedExpectedFinalValue: checkParsedExpectedFinalValueResult,
    accruedInterest: checkAccruedInterestResult,
  })
}

export default PresentValueOfAnAnnuityFunction
