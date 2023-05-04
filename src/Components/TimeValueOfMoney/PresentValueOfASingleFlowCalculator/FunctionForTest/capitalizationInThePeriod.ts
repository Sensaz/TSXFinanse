type FrequencyCapitalizationInterface = {
  [key: string]: number
}

const capitalizationInThePeriod = (
  parsedInterestRate: number,
  interestCapitalization: string
) => {
  const frequencyCapitalization: FrequencyCapitalizationInterface = {
    AnnualCapitalization: 1,
    SemiAnnualCapitalization: 2,
    QuarterlyCapitalization: 4,
    MonthlyCapitalization: 12,
    DailyCapitalization: 365,
    ContinuousCapitalization: 2.7182818284590452353602874713527,
  }

  const chceckInterestCapitalization = !Object.keys(
    frequencyCapitalization
  ).includes(interestCapitalization)

  if (parsedInterestRate <= 0 || chceckInterestCapitalization)
    return {
      result: 0,
      capitalization: 1,
    }

  const result =
    parsedInterestRate / frequencyCapitalization[interestCapitalization] / 100

  const capitalization = frequencyCapitalization[interestCapitalization]
  return {
    result,
    capitalization,
  }
}

export default capitalizationInThePeriod
