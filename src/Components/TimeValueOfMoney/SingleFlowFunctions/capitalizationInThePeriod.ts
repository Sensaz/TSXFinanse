type FrequencyCapitalizationInterface = {
  [key: string]: number
}

const capitalizationInThePeriod = (
  interestRate: number,
  interestCapitalization: string
) => {
  const frequencyCapitalization: FrequencyCapitalizationInterface = {
    AnnualCapitalization: 1,
    SemiAnnualCapitalization: 2,
    QuarterlyCapitalization: 4,
    MonthlyCapitalization: 12,
    DailyCapitalization: 365,
    ContinuousCapitalization: 2.718281828459045,
  }

  const chceckInterestCapitalization = !Object.keys(
    frequencyCapitalization
  ).includes(interestCapitalization)

  if (interestRate <= 0 || isNaN(interestRate) || chceckInterestCapitalization)
    return {
      result: 0,
      capitalization: 0,
    }

  const result =
    interestRate / frequencyCapitalization[interestCapitalization] / 100

  const capitalization = frequencyCapitalization[interestCapitalization]
  return {
    result,
    capitalization,
  }
}

export default capitalizationInThePeriod
