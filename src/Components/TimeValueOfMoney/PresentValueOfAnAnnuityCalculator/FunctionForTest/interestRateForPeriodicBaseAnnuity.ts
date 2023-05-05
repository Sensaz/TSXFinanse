type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

const interestRateForPeriodicBaseAnnuity = (
  parsedInterestRate: number,
  annuityPaymentFrequency: string
) => {
  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityPaidAnnually: 1,
    AnnuityPaidSemiAnnually: 2,
    AnnuityPaidQuarterly: 4,
    AnnuityPaidMonthyly: 12,
  }

  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  if (parsedInterestRate <= 0 || !propsAnnuityPaymentFrequencyOptions) return 0

  return parsedInterestRate / propsAnnuityPaymentFrequencyOptions / 100
}

export default interestRateForPeriodicBaseAnnuity
