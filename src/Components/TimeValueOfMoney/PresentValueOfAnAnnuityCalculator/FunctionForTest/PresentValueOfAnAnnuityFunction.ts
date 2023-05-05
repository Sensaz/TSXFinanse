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

const PresentValueOfAnAnnuityFunction = (
  expectedAnnuity: string, // Oczekiwana renta
  duration: string, // Czas Trwania
  requiredInterestRate: string, // Stopa zwrotu
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

  console.log(annuityCapitalization)
}

export default PresentValueOfAnAnnuityFunction
