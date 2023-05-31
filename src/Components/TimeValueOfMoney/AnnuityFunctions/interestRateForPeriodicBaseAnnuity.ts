type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

const interestRateForPeriodicBaseAnnuity = (
  interestRate: number,
  annuityPaymentFrequency: string
) => {
  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityAnnually: 1,
    AnnuitySemiAnnually: 2,
    AnnuityQuarterly: 4,
    AnnuityMonthly: 12,
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
