type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

function isValidDurationOption(
  optionDuration: string,
  duration: number,
  annuityPaymentFrequency: string
) {
  const validDurationOptions = ['DurationInMonths', 'DurationInYears']
  const validAnnuityPaymentFrequencies = [
    'AnnuityPaidAnnually',
    'AnnuityPaidSemiAnnually',
    'AnnuityPaidQuarterly',
    'AnnuityPaidMonthyly',
  ]

  return (
    duration > 0 &&
    validDurationOptions.includes(optionDuration) &&
    validAnnuityPaymentFrequencies.includes(annuityPaymentFrequency)
  )
}

const numberOfAnnuityPeriods = (
  duration: number,
  optionDuration: string,
  annuityPaymentFrequency: string
) => {
  if (!isValidDurationOption(optionDuration, duration, annuityPaymentFrequency))
    return 0

  let propertiesDuration = duration
  if (optionDuration === 'DurationInYears') propertiesDuration *= 12

  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityPaidAnnually: 12,
    AnnuityPaidSemiAnnually: 6,
    AnnuityPaidQuarterly: 3,
    AnnuityPaidMonthyly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    propertiesDuration / propsAnnuityPaymentFrequencyOptions
  )

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
