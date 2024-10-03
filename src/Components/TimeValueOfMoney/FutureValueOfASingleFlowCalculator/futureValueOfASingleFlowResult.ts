import {
  capitalizationInThePeriod,
  durationInvestmentInMonth,
} from '../SingleFlowFunctions'

type ResultCompoundInterestCalculateType = {
  startValue: number
  investmentResult: number
  accruedInterest: number
}

const futureValueOfASingleFlowResult = (
  startValue: number,
  duration: number,
  interestRate: number,
  optionDuration: string,
  interestCapitalization: string,
  propsSetResultCompoundInterestCalculate: (
    resultCompoundInterestCalculate: ResultCompoundInterestCalculateType
  ) => void
) => {
  const resultCapitalizationInThePeriod = capitalizationInThePeriod(
    interestRate,
    interestCapitalization
  )?.result

  const capitalization = capitalizationInThePeriod(
    interestRate,
    interestCapitalization
  )?.capitalization

  const resultDurationInMonths = durationInvestmentInMonth(
    duration,
    optionDuration
  )
  if (
    startValue <= 0 ||
    isNaN(startValue) ||
    resultCapitalizationInThePeriod <= 0 ||
    capitalization <= 0 ||
    resultDurationInMonths <= 0
  )
    return propsSetResultCompoundInterestCalculate({
      investmentResult: 0,
      startValue: 0,
      accruedInterest: 0,
    })

  let investmentResult =
    startValue *
    Math.pow(
      1 + resultCapitalizationInThePeriod,
      (capitalization * resultDurationInMonths) / 12
    )

  let accruedInterest = investmentResult - startValue

  if (capitalization === 2.718281828459045) {
    investmentResult =
      startValue *
      Math.pow(capitalization, (interestRate / 1200) * resultDurationInMonths)

    accruedInterest = investmentResult - startValue

    return propsSetResultCompoundInterestCalculate({
      investmentResult,
      startValue,
      accruedInterest,
    })
  }

  return propsSetResultCompoundInterestCalculate({
    investmentResult,
    startValue,
    accruedInterest,
  })
}

export default futureValueOfASingleFlowResult
