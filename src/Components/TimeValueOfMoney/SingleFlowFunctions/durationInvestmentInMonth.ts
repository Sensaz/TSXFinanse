const durationInvestmentInMonth = (
  duration: number,
  optionDuration: string
) => {
  if (
    duration <= 0 ||
    isNaN(duration) ||
    (optionDuration !== 'DurationInMonths' &&
      optionDuration !== 'DurationInYears')
  )
    return 0

  if (optionDuration === 'DurationInMonths') return duration
  else return duration * 12
}

export default durationInvestmentInMonth
