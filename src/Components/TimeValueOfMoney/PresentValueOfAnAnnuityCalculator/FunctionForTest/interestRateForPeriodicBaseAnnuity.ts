type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

const interestRateForPeriodicBaseAnnuity = (
  parsedInterestRate: number,
  annuityPaymentFrequency: string
) => {
  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityRecivedAnnually: 1,
    AnnuityRecivedSemiAnnually: 2,
    AnnuityRecivedQuarterly: 4,
    AnnuityRecivedMonthyly: 12,
  }

  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  if (
    parsedInterestRate <= 0 ||
    isNaN(parsedInterestRate) ||
    !propsAnnuityPaymentFrequencyOptions
  )
    return 0

  return parsedInterestRate / propsAnnuityPaymentFrequencyOptions / 100
}

export default interestRateForPeriodicBaseAnnuity
