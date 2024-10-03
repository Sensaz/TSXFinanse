import {
  interestRateForPeriodicBaseAnnuity,
  numberOfAnnuityPeriods,
} from '../AnnuityFunctions'

type ResultCompoundInterestCalculateType = {
  presentValue: number
  nominalValue: number
  accruedInterest: number
}

const presentValueOfAnAnnuityResults = (
  expectedAnnuity: number,
  duration: number,
  requiredInterestRate: number,
  annuityRecived: string,
  optionDuration: string,
  annuityCapitalization: string,
  setResultCompoundInterestCalculate: (
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
    return setResultCompoundInterestCalculate({
      presentValue: 0,
      nominalValue: 0,
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

  let nominalValue = expectedAnnuity * numberOfAnnuityPeriodsResult

  let accruedInterest =
    expectedAnnuity * numberOfAnnuityPeriodsResult - presentValue

  if (annuityRecived === 'AnnuityPaidInAdvance') {
    presentValue =
      expectedAnnuity *
      (1 + interestRateForPeriodicBaseAnnuityResult) *
      presentValueOfAnAnnuityMultiplier

    nominalValue = expectedAnnuity * numberOfAnnuityPeriodsResult

    accruedInterest =
      expectedAnnuity * numberOfAnnuityPeriodsResult - presentValue

    return setResultCompoundInterestCalculate({
      presentValue,
      nominalValue,
      accruedInterest,
    })
  }

  return setResultCompoundInterestCalculate({
    presentValue,
    nominalValue,
    accruedInterest,
  })
}

export default presentValueOfAnAnnuityResults
