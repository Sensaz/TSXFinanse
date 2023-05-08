import capitalizationInThePeriod from '../SingleFlowFunctions/capitalizationInThePeriod.ts'
import durationInvestmentInMonth from '../SingleFlowFunctions/durationInvestmentInMonth.ts'

type ResultCompoundInterestCalculateType = {
  presentValue: number
  expectedFinalValue: number
  accruedInterest: number
}

const presentValueOfASingleFlowResult = (
  expectedFinalValue: number,
  duration: number,
  interestRate: number,
  optionDuration: string,
  interestCapitalization: string,
  setResultCompoundInterestCalculate: (
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
    expectedFinalValue <= 0 ||
    isNaN(expectedFinalValue) ||
    resultCapitalizationInThePeriod <= 0 ||
    capitalization <= 0 ||
    resultDurationInMonths <= 0
  )
    return setResultCompoundInterestCalculate({
      presentValue: 0,
      expectedFinalValue: 0,
      accruedInterest: 0,
    })

  let presentValueMultiplier = Math.pow(
    1 + resultCapitalizationInThePeriod,
    (resultDurationInMonths / 12) * capitalization
  )

  let presentValue = expectedFinalValue / presentValueMultiplier

  let accruedInterest = expectedFinalValue - presentValue

  if (capitalization === 2.7182818284590452353602874713527) {
    presentValueMultiplier = Math.pow(
      2.7182818284590452353602874713527,
      -(resultDurationInMonths * (interestRate / 1200))
    )
    presentValue = expectedFinalValue * presentValueMultiplier

    accruedInterest = expectedFinalValue - presentValue

    return setResultCompoundInterestCalculate({
      presentValue,
      expectedFinalValue,
      accruedInterest,
    })
  }
  return setResultCompoundInterestCalculate({
    presentValue,
    expectedFinalValue,
    accruedInterest,
  })
}

export default presentValueOfASingleFlowResult
