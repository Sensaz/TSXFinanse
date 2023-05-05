import PresentValueOfAnAnnuityFunction from '../FunctionForTest/PresentValueOfAnAnnuityFunction.ts'
const setResultCompoundInterestCalculate = jest.fn()

// expectedAnnuity - Oczekiwana renta
// duration - Czas Trwania
// requiredInterestRate - Wymagana Stopa zwrotu

// annuityRecived - Renta Otrzymywana z
// ------ AnnuityPaidInAdvance - Góry
// ------ AnnuityPayableInAdvance - Dołu

// optionDuration - Czas Trwania podany w
// ------ DurationInMonths
// ------ DurationInYears

// annuityCapitalization - Renta otrzymywana co
// ------ AnnuityRecivedAnnually
// ------ AnnuityRecivedSemiAnnually
// ------ AnnuityRecivedQuarterly
// ------ AnnuityRecivedMonthyly

describe('PresentValueOfAnAnnuityFunction should return three zeros when', () => {
  describe('EXPECTED ANNUITY TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '',
        '100',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '-3232',
        '100',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '0',
        '100',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
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
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '-100',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '0',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('REQUIRED INTEREST RATE TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '-20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '0',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY RECIVED TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '20',
        '',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'kebab',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
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
        'AnnuityPaidInAdvance',
        '',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'pizza',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY CAPITALIZATION TESTS', () => {
    test('is empty', () => {
      PresentValueOfAnAnnuityFunction(
        '500',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        '',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'BułkaZTuńczykiemWAutobusie',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('PresentValueOfAnAnnuityFunction should return results when', () => {
  describe('annuityRecived equal AnnuityPaidInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '100.00',
        parsedExpectedFinalValue: '100.00',
        accruedInterest: 0,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '285.94',
        parsedExpectedFinalValue: '300.00',
        accruedInterest: '14.06',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '929.36',
        parsedExpectedFinalValue: '1000.00',
        accruedInterest: '70.64',
      })
    })
  })

  describe('annuityRecived equal AnnuityPaidInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '503.10',
        parsedExpectedFinalValue: '1000.00',
        accruedInterest: '496.90',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '936.49',
        parsedExpectedFinalValue: '2000.00',
        accruedInterest: '1063.51',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '1801.70',
        parsedExpectedFinalValue: '4000.00',
        accruedInterest: '2198.30',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '5260.73',
        parsedExpectedFinalValue: '12000.00',
        accruedInterest: '6739.27',
      })
    })
  })

  describe('annuityRecived equal AnnuityPayableInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '90.91',
        parsedExpectedFinalValue: '100.00',
        accruedInterest: '9.09',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '272.32',
        parsedExpectedFinalValue: '300.00',
        accruedInterest: '27.68',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '914.13',
        parsedExpectedFinalValue: '1000.00',
        accruedInterest: '85.87',
      })
    })
  })

  describe('annuityRecived equal AnnuityPayableInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '419.25',
        parsedExpectedFinalValue: '1000.00',
        accruedInterest: '580.75',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '851.36',
        parsedExpectedFinalValue: '2000.00',
        accruedInterest: '1148.64',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '1715.91',
        parsedExpectedFinalValue: '4000.00',
        accruedInterest: '2284.09',
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      PresentValueOfAnAnnuityFunction(
        '100',
        '10',
        '20',
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: '5174.49',
        parsedExpectedFinalValue: '12000.00',
        accruedInterest: '6825.51',
      })
    })
  })
})
