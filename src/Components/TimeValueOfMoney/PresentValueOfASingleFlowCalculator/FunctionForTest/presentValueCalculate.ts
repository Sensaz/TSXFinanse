import capitalizationInThePeriod from './capitalizationInThePeriod'
import durationInvestmentInMonth from './durationInvestmentInMonth'

type ResultCompoundInterestCalculateType = {
  parsedExpectedFinalValue: any
  investmentResult: any
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
    propsOptionDuration === '' ||
    propsInterestCapitalization === ''
  )
    return propsSetResultCompoundInterestCalculate({
      parsedExpectedFinalValue: 0,
      investmentResult: 0,
      accruedInterest: 0,
    })
}

export default presentValueCalculate
