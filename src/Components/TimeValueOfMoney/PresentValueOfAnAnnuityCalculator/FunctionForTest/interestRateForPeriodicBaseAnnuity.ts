type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

const interestRateForPeriodicBaseAnnuity = (
  interestRate: number,
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
    interestRate <= 0 ||
    isNaN(interestRate) ||
    !propsAnnuityPaymentFrequencyOptions
  )
    return 0

  return interestRate / propsAnnuityPaymentFrequencyOptions / 100
}

export default interestRateForPeriodicBaseAnnuity
