const creditDurationInMonths = (duration: number, optionDuration: string) => {
  if (
    (optionDuration !== 'DurationInYears' &&
      optionDuration !== 'DurationInMonths') ||
    duration <= 0 ||
    isNaN(duration)
  ) {
    return 0
  }

  if (optionDuration === 'DurationInYears') return duration * 12
  return duration
}

export default creditDurationInMonths
