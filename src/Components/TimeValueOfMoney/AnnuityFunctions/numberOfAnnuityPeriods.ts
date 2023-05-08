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
    'AnnuityAnnually',
    'AnnuitySemiAnnually',
    'AnnuityQuarterly',
    'AnnuityMonthly',
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
    AnnuityAnnually: 12,
    AnnuitySemiAnnually: 6,
    AnnuityQuarterly: 3,
    AnnuityMonthly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    propertiesDuration / propsAnnuityPaymentFrequencyOptions
  )

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
