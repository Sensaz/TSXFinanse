import capitalizationInThePeriod from './capitalizationInThePeriod'
import durationInvestmentInMonth from './durationInvestmentInMonth'

type ResultCompoundInterestCalculateType = {
  parsedExpectedFinalValue: any
  presentValue: any
  accruedInterest: any
}

const presentValueCalculate = (
  expectedFinalValue: string,
  propsDuration: string,
  interestRate: string,
  propsOptionDuration: string,
  propsInterestCapitalization: string,
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  let parsedExpectedFinalValue = parseFloat(expectedFinalValue)
  let parsedDuration = parseFloat(propsDuration)
  let parsedInterestRate = parseFloat(interestRate)
  if (
    parsedExpectedFinalValue <= 0 ||
    parsedDuration <= 0 ||
    parsedInterestRate <= 0 ||
    (propsOptionDuration !== 'DurationInMonths' &&
      propsOptionDuration !== 'DurationInYears') ||
    (propsInterestCapitalization !== 'AnnualCapitalization' &&
      propsInterestCapitalization !== 'SemiAnnualCapitalization' &&
      propsInterestCapitalization !== 'QuarterlyCapitalization' &&
      propsInterestCapitalization !== 'MonthlyCapitalization' &&
      propsInterestCapitalization !== 'DailyCapitalization' &&
      propsInterestCapitalization !== 'ContinuousCapitalization')
  )
    return propsSetResultCompoundInterestCalculate({
      parsedExpectedFinalValue: 0,
      presentValue: 0,
      accruedInterest: 0,
    })

  const resultCapitalizationInThePeriod = capitalizationInThePeriod(
    parsedInterestRate,
    propsInterestCapitalization
  )?.result

  const capitalization = capitalizationInThePeriod(
    parsedInterestRate,
    propsInterestCapitalization
  )?.capitalization

  const resultDurationInMonths = durationInvestmentInMonth(
    parsedDuration,
    propsOptionDuration
  )

  if (capitalization === 2.7182818284590452353602874713527) {
    const presentValueMultiplier = Math.pow(
      2.7182818284590452353602874713527,
      -(resultDurationInMonths * (parsedInterestRate / 1200))
    )
    const PV = parsedExpectedFinalValue * presentValueMultiplier

    return propsSetResultCompoundInterestCalculate({
      presentValue: PV.toFixed(2),
      parsedExpectedFinalValue: parsedExpectedFinalValue.toFixed(2),
      accruedInterest: (parsedExpectedFinalValue - PV).toFixed(2),
    })
  }

  const presentValueMultiplier = Math.pow(
    1 + resultCapitalizationInThePeriod,
    (resultDurationInMonths / 12) * capitalization
  )
  console.log(propsInterestCapitalization)

  const PV = parsedExpectedFinalValue / presentValueMultiplier

  return propsSetResultCompoundInterestCalculate({
    presentValue: PV.toFixed(2),
    parsedExpectedFinalValue: parsedExpectedFinalValue.toFixed(2),
    accruedInterest: (parsedExpectedFinalValue - PV).toFixed(2),
  })
}

export default presentValueCalculate
