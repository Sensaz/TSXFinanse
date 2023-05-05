import PresentValueOfAnAnnuityFunction from '../FunctionForTest/PresentValueOfAnAnnuityFunction.ts'
const setResultCompoundInterestCalculate = jest.fn()

describe('PresentValueOfAnAnnuityFunction should return three zeros when', () => {
  describe('PENSION AMOUTN TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '',
        '100',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '-3232',
        '100',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '0',
        '100',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('DURATION TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '-100',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '0',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('INTEREST RATE TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '-20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '0',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('OPTION DURATION TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '20',
        '',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'fdsfsdfsdf',
        'AnnuityPaidInAdvance',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY PAYMENT OPTION TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '20',
        'DurationInMonths',
        '',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'DurationInMonths',
        'fdsfsdfsdf',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY PAYMENT FREQUENCY TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        '',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'kebab',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('PresentValueOfAnAnnuityFunction should return results when', () => {
  describe('optionDuration equal DurationInMonths and annuityPaymentOption equal AnnuityPaidInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityPaidAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '200.00',
        investmentResult: '231.00',
        accruedInterest: '31.00',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityPaidSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '500.00',
        investmentResult: '580.19',
        accruedInterest: '80.19',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityPaidQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '1000.00',
        investmentResult: '1148.35',
        accruedInterest: '148.35',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPaidInAdvance',
        'AnnuityPaidMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '3000.00',
        investmentResult: '3420.62',
        accruedInterest: '420.62',
      })
    })
  })

  describe('optionDuration equal DurationInYears and annuityPaymentOption equal AnnuityPaidInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityPaidAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '3000.00',
        investmentResult: '18094.34',
        accruedInterest: '15094.34',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityPaidSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '6000.00',
        investmentResult: '37126.29',
        accruedInterest: '31126.29',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityPaidQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '12000.00',
        investmentResult: '75268.41',
        accruedInterest: '63268.41',
      })
    })

    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPaidInAdvance',
        'AnnuityPaidMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '36000.00',
        investmentResult: '227932.53',
        accruedInterest: '191932.53',
      })
    })
  })

  describe('optionDuration equal DurationInMonths and annuityPaymentOption equal AnnuityPayableInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityPaidAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '200.00',
        investmentResult: '210.00',
        accruedInterest: '10.00',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityPaidSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '500.00',
        investmentResult: '552.56',
        accruedInterest: '52.56',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityPaidQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '1000.00',
        investmentResult: '1120.34',
        accruedInterest: '120.34',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityPaidMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '3000.00',
        investmentResult: '3392.35',
        accruedInterest: '392.35',
      })
    })
  })

  describe('optionDuration equal DurationInYears and annuityPaymentOption equal AnnuityPayableInAdvance', () => {
    test('annuityPaymentFrequency equal AnnuityPaidAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInMonths',
        'AnnuityPayableInAdvance',
        'AnnuityPaidAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '200.00',
        investmentResult: '210.00',
        accruedInterest: '10.00',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityPaidSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '6000.00',
        investmentResult: '35358.37',
        accruedInterest: '29358.37',
      })
    })
    test('annuityPaymentFrequency equal AnnuityPaidQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityPaidQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '12000.00',
        investmentResult: '73432.60',
        accruedInterest: '61432.60',
      })
    })

    test('annuityPaymentFrequency equal AnnuityPaidMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '30',
        '10',
        'DurationInYears',
        'AnnuityPayableInAdvance',
        'AnnuityPaidMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedPensionAmount: '36000.00',
        investmentResult: '226048.79',
        accruedInterest: '190048.79',
      })
    })
  })
})
