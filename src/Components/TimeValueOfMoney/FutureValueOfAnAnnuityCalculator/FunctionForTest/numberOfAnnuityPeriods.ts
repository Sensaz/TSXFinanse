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
    'AnnuityPaidAnnually',
    'AnnuityPaidSemiAnnually',
    'AnnuityPaidQuarterly',
    'AnnuityPaidMonthyly',
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
    AnnuityPaidAnnually: 12,
    AnnuityPaidSemiAnnually: 6,
    AnnuityPaidQuarterly: 3,
    AnnuityPaidMonthyly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    propertiesParsedDuration / propsAnnuityPaymentFrequencyOptions
  )

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
