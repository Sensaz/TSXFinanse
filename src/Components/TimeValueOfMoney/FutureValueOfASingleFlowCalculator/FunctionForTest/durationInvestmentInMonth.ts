const durationInvestmentInMonth = (
  parsedDuration: number,
  optionDuration: string
) => {
  if (
    parsedDuration <= 0 ||
    (optionDuration !== 'DurationInMonths' &&
      optionDuration !== 'DurationInYears')
  )
    return 0

  if (optionDuration === 'DurationInMonths') return parsedDuration
  else return parsedDuration * 12
}

export default durationInvestmentInMonth
