type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

function isValidDurationOption(
  duration: number,
  optionDuration: string,
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
    !isNaN(duration) &&
    validDurationOptions.includes(optionDuration) &&
    validAnnuityPaymentFrequencies.includes(annuityPaymentFrequency)
  )
}

const numberOfAnnuityPeriods = (
  duration: number,
  optionDuration: string,
  annuityPaymentFrequency: string
) => {
  if (!isValidDurationOption(duration, optionDuration, annuityPaymentFrequency))
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
