import presentValueOfAnAnnuityResults from '../FunctionForTest/presentValueOfAnAnnuityResults.ts'
const setResultCompoundInterestCalculate = jest.fn()

describe('presentValueOfAnAnnuityResults should return three zeros when', () => {
  describe('EXPECTED ANNUITY TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        NaN,
        100,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      presentValueOfAnAnnuityResults(
        -3232,
        100,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      presentValueOfAnAnnuityResults(
        0,
        100,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('DURATION TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        500,
        NaN,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      presentValueOfAnAnnuityResults(
        500,
        -100,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      presentValueOfAnAnnuityResults(
        100,
        0,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('REQUIRED INTEREST RATE TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        500,
        10,
        NaN,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is negative number', () => {
      presentValueOfAnAnnuityResults(
        500,
        10,
        -20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('equal 0', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        0,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY RECIVED TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        500,
        10,
        20,
        '',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'kebab',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('OPTION DURATION TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        500,
        10,
        20,
        'AnnuityPaidInAdvance',
        '',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'pizza',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
  describe('ANNUITY CAPITALIZATION TESTS', () => {
    test('is empty', () => {
      presentValueOfAnAnnuityResults(
        500,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        '',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('is random string', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'BułkaZTuńczykiemWAutobusie',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('presentValueOfAnAnnuityResults should return results when', () => {
  describe('annuityRecived equal AnnuityPaidInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 100.00000000000004,
        nominalValue: 100,
        accruedInterest: -4.263256414560601e-14,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 285.94104308390035,
        nominalValue: 300,
        accruedInterest: 14.058956916099646,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInMonths',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 929.3637243806894,
        nominalValue: 1000,
        accruedInterest: 70.6362756193106,
      })
    })
  })

  describe('annuityRecived equal AnnuityPaidInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 503.0966502660926,
        nominalValue: 1000,
        accruedInterest: 496.9033497339074,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 936.4920091734423,
        nominalValue: 2000,
        accruedInterest: 1063.5079908265577,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 1801.704067169417,
        nominalValue: 4000,
        accruedInterest: 2198.2959328305833,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPaidInAdvance',
        'DurationInYears',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 5260.733902899707,
        nominalValue: 12000,
        accruedInterest: 6739.266097100293,
      })
    })
  })

  describe('annuityRecived equal AnnuityPayableInAdvance and optionDuration equal DurationInMonths', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        nominalValue: 0,
        accruedInterest: 0,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 90.90909090909093,
        nominalValue: 100,
        accruedInterest: 9.090909090909065,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 272.324802937048,
        nominalValue: 300,
        accruedInterest: 27.67519706295201,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInMonths',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 914.1282534892027,
        nominalValue: 1000,
        accruedInterest: 85.87174651079727,
      })
    })
  })

  describe('annuityRecived equal AnnuityPayableInAdvance and optionDuration equal DurationInYears', () => {
    test('annuityCapitalization equal AnnuityRecivedAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 419.2472085550771,
        nominalValue: 1000,
        accruedInterest: 580.7527914449229,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedSemiAnnually', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedSemiAnnually',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 851.3563719758565,
        nominalValue: 2000,
        accruedInterest: 1148.6436280241435,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedQuarterly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedQuarterly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 1715.9086353994446,
        nominalValue: 4000,
        accruedInterest: 2284.0913646005556,
      })
    })
    test('annuityCapitalization equal AnnuityRecivedMonthyly', () => {
      presentValueOfAnAnnuityResults(
        100,
        10,
        20,
        'AnnuityPayableInAdvance',
        'DurationInYears',
        'AnnuityRecivedMonthyly',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        presentValue: 5174.4923635079085,
        nominalValue: 12000,
        accruedInterest: 6825.5076364920915,
      })
    })
  })
})
