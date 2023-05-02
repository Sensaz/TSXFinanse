import capitalizationInThePeriod from './capitalizationInThePeriod'
import durationInvestmentInMonth from './durationInvestmentInMonth'

const compoundInterestCalculate = (
  propsStartValue: string,
  propsDuration: string,
  interestRate: string,
  propsOptionDuration: string,
  propsInterestCapitalization: string,
  propsSetResultCompoundInterestCalculate: any
) => {
  let parsedStartValue = parseFloat(propsStartValue)
  let parsedDuration = parseFloat(propsDuration)
  let parsedInterestRate = parseFloat(interestRate)

  if (
    parsedStartValue <= 0 ||
    parsedDuration <= 0 ||
    parsedInterestRate <= 0 ||
    propsOptionDuration === '' ||
    propsInterestCapitalization === ''
  )
    return propsSetResultCompoundInterestCalculate({
      parsedStartValue: 0,
      investmentResult: 0,
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
    const investmentResult =
      parsedStartValue *
      Math.pow(
        capitalization,
        (parsedInterestRate / 1200) * resultDurationInMonths
      )

    const accruedInterest = investmentResult - parsedStartValue

    propsSetResultCompoundInterestCalculate({
      parsedStartValue: parsedStartValue.toFixed(2),
      investmentResult: investmentResult.toFixed(2),
      accruedInterest: accruedInterest.toFixed(2),
    })
    return
  }

  const investmentResult =
    parsedStartValue *
    Math.pow(
      1 + resultCapitalizationInThePeriod,
      (capitalization * resultDurationInMonths) / 12
    )

  const accruedInterest = investmentResult - parsedStartValue

  propsSetResultCompoundInterestCalculate({
    parsedStartValue: parsedStartValue.toFixed(2),
    investmentResult: investmentResult.toFixed(2),
    accruedInterest: accruedInterest.toFixed(2),
  })
}

export default compoundInterestCalculate
