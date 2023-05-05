type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

function isValidDurationOption(
  optionDuration: string,
  parsedDuration: number,
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
    parsedDuration > 0 &&
    validDurationOptions.includes(optionDuration) &&
    validAnnuityPaymentFrequencies.includes(annuityPaymentFrequency)
  )
}

const numberOfAnnuityPeriods = (
  parsedDuration: number,
  optionDuration: string,
  annuityPaymentFrequency: string
) => {
  if (
    !isValidDurationOption(
      optionDuration,
      parsedDuration,
      annuityPaymentFrequency
    )
  )
    return 0

  let propertiesParsedDuration = parsedDuration
  if (optionDuration === 'DurationInYears') propertiesParsedDuration *= 12

  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityRecivedAnnually: 12,
    AnnuityRecivedSemiAnnually: 6,
    AnnuityRecivedQuarterly: 3,
    AnnuityRecivedMonthyly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    propertiesParsedDuration / propsAnnuityPaymentFrequencyOptions
  )

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
