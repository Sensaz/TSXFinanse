import futureValueOfAnAnnuityResult from '../futureValueOfAnAnnuityResult.ts'
const setResultCompoundInterestCalculate = jest.fn()

describe('futureValueOfAnAnnuityResult should return three zeros when', () => {
  describe('PENSION AMOUTN TESTS', () => {
    test('is NaN', () => {
      futureValueOfAnAnnuityResult(
        NaN,
        100,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      futureValueOfAnAnnuityResult(
        -3232,
        100,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      futureValueOfAnAnnuityResult(
        0,
        100,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('DURATION TESTS', () => {
    test('is empty', () => {
      futureValueOfAnAnnuityResult(
        500,
        NaN,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      futureValueOfAnAnnuityResult(
        500,
        -100,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      futureValueOfAnAnnuityResult(
        100,
        0,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('INTEREST RATE TESTS', () => {
    test('is empty', () => {
      futureValueOfAnAnnuityResult(
        500,
        10,
        NaN,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      futureValueOfAnAnnuityResult(
        500,
        10,
        -20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      futureValueOfAnAnnuityResult(
        100,
        10,
        0,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('OPTION DURATION TESTS', () => {
    test('is empty', () => {
      futureValueOfAnAnnuityResult(
        500,
        10,
        20,
        '',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      futureValueOfAnAnnuityResult(
        100,
        10,
        20,
        'fdsfsdfsdf',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY PAYMENT OPTION TESTS', () => {
    test('is empty', () => {
      futureValueOfAnAnnuityResult(
        500,
        10,
        20,
        'DurationInMonths',
        '',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      futureValueOfAnAnnuityResult(
        100,
        10,
        20,
        'DurationInMonths',
        'fdsfsdfsdf',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY PAYMENT FREQUENCY TESTS', () => {
    test('is empty', () => {
      futureValueOfAnAnnuityResult(
        500,
        10,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        '',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      futureValueOfAnAnnuityResult(
        100,
        10,
        20,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'kebab',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 0,
        pensionAmount: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('futureValueOfAnAnnuityResult should return results when', () => {
  describe('optionDuration equal DurationInMonths and annuityPaymentOption equal AnnuityPaidInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 231.00000000000023,
        pensionAmount: 200,
        accruedInterest: 31.000000000000227,
      })
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuitySemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 580.1912812500008,
        pensionAmount: 500,
        accruedInterest: 80.19128125000077,
      })
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 1148.346631205062,
        pensionAmount: 1000,
        accruedInterest: 148.34663120506207,
      })
    })
    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityMonthly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 3420.621158347132,
        pensionAmount: 3000,
        accruedInterest: 420.6211583471322,
      })
    })
  })

  describe('optionDuration equal DurationInYears and annuityPaymentOption equal AnnuityPaidInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 18094.342495775094,
        pensionAmount: 3000,
        accruedInterest: 15094.342495775094,
      })
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuitySemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 37126.29037765829,
        pensionAmount: 6000,
        accruedInterest: 31126.29037765829,
      })
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 75268.41431848887,
        pensionAmount: 12000,
        accruedInterest: 63268.41431848887,
      })
    })

    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityMonthly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 227932.53241693613,
        pensionAmount: 36000,
        accruedInterest: 191932.53241693613,
      })
    })
  })

  describe('optionDuration equal DurationInMonths and annuityPaymentOption equal AnnuityPayableInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 210.0000000000002,
        pensionAmount: 200,
        accruedInterest: 10.000000000000199,
      })
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuitySemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 552.5631250000007,
        pensionAmount: 500,
        accruedInterest: 52.563125000000696,
      })
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 1120.3381767854266,
        pensionAmount: 1000,
        accruedInterest: 120.33817678542664,
      })
    })
    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityMonthly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 3392.351561997156,
        pensionAmount: 3000,
        accruedInterest: 392.35156199715584,
      })
    })
  })

  describe('optionDuration equal DurationInYears and annuityPaymentOption equal AnnuityPayableInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 16449.402268886446,
        pensionAmount: 3000,
        accruedInterest: 13449.402268886446,
      })
    })
    test('annuityPaymentFrequency equal AnnuitySemiAnnually', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuitySemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 35358.37178824599,
        pensionAmount: 6000,
        accruedInterest: 29358.37178824599,
      })
    })
    test('annuityPaymentFrequency equal AnnuityQuarterly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 73432.59933511111,
        pensionAmount: 12000,
        accruedInterest: 61432.59933511111,
      })
    })

    test('annuityPaymentFrequency equal AnnuityMonthly', () => {
      futureValueOfAnAnnuityResult(
        100,
        30,
        10,
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityMonthly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        investmentResult: 226048.79247960608,
        pensionAmount: 36000,
        accruedInterest: 190048.79247960608,
      })
    })
  })
})
