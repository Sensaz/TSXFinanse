type annuityPaymentFrequencyInterface = {
  [key: string]: number
}

function isValidDurationOption(
  optionDuration: string,
  annuityPaymentOption: string,
  annuityPaymentFrequency: string,
  parsedDuration: number
) {
  const validAnnuityPaymentOptions = [
    'AnnuityPaidInAdvance',
    'AnnuityPayableInAdvance',
  ]
  const validDurationOptions = ['DurationInMonths', 'DurationInYears']
  const validAnnuityPaymentFrequencies = [
    'AnnuityPaidAnnually',
    'AnnuityPaidSemiAnnually',
    'AnnuityPaidQuarterly',
    'AnnuityPaidMonthyly',
  ]

  return (
    parsedDuration > 0 &&
    validAnnuityPaymentOptions.includes(annuityPaymentOption) &&
    validDurationOptions.includes(optionDuration) &&
    validAnnuityPaymentFrequencies.includes(annuityPaymentFrequency)
  )
}

const numberOfAnnuityPeriods = (
  parsedDuration: number,
  annuityPaymentOption: string,
  optionDuration: string,
  annuityPaymentFrequency: string
) => {
  if (
    !isValidDurationOption(
      optionDuration,
      annuityPaymentOption,
      annuityPaymentFrequency,
      parsedDuration
    )
  )
    return 0

  let propertiesParsedDuration = parsedDuration
  if (optionDuration === 'DurationInYears') propertiesParsedDuration *= 12

  const annuityPaymentFrequencyOptions: annuityPaymentFrequencyInterface = {
    AnnuityPaidAnnually: 12,
    AnnuityPaidSemiAnnually: 6,
    AnnuityPaidQuarterly: 4,
    AnnuityPaidMonthyly: 1,
  }
  const propsAnnuityPaymentFrequencyOptions =
    annuityPaymentFrequencyOptions[annuityPaymentFrequency]

  const numberOfAnnuities = Math.floor(
    propertiesParsedDuration / propsAnnuityPaymentFrequencyOptions
  )

  if (annuityPaymentOption === 'AnnuityPaidInAdvance')
    return numberOfAnnuities + 1

  return numberOfAnnuities
}

export default numberOfAnnuityPeriods
