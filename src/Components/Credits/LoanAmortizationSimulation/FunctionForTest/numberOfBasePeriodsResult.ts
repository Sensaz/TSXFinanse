type paymentPeriodOfInstallmentValue = {
  [key: string]: number
}

const numberOfBasePeriodsResult = (
  paymentPeriodOfInstallment: string,
  durationInMonths: number
) => {
  if (
    (paymentPeriodOfInstallment !== 'DurationInYears' &&
      paymentPeriodOfInstallment !== 'DurationInHalfYears' &&
      paymentPeriodOfInstallment !== 'DurationInQarters' &&
      paymentPeriodOfInstallment !== 'DurationInMonths') ||
    durationInMonths <= 0
  )
    return {
      totalPaymentPeriods: 0,
      basePeriodsPerYear: 0,
    }

  const paymentPeriodOfInstallmentValue: paymentPeriodOfInstallmentValue = {
    DurationInYears: 12,
    DurationInHalfYears: 6,
    DurationInQarters: 3,
    DurationInMonths: 1,
  }
  const numberOfBasePeriodsInAYear =
    paymentPeriodOfInstallmentValue[paymentPeriodOfInstallment]

  return {
    totalPaymentPeriods: Math.floor(
      durationInMonths / numberOfBasePeriodsInAYear
    ),
    basePeriodsPerYear: 12 / numberOfBasePeriodsInAYear,
  }
}

export default numberOfBasePeriodsResult
