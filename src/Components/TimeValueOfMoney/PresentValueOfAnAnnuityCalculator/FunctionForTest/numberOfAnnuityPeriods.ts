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
    'AnnuityRecivedAnnually',
    'AnnuityRecivedSemiAnnually',
    'AnnuityRecivedQuarterly',
    'AnnuityRecivedMonthyly',
  ]

  return (
    (duration > 0 && !isNaN(duration)) &&
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

  let durationInMonths = duration
  if (optionDuration === 'DurationInYears') durationInMonths *= 12

  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityRecivedAnnually: 12,
    AnnuityRecivedSemiAnnually: 6,
    AnnuityRecivedQuarterly: 3,
    AnnuityRecivedMonthyly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    durationInMonths / propsAnnuityPaymentFrequencyOptions
  )

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
