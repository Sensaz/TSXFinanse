import presentValueOfASingleFlowResult from '../presentValueOfASingleFlowResult'
const setResultpresentValueOfASingleFlowResult = jest.fn()

describe('presentValueOfASingleFlowResult should return three zeros when', () => {
  describe('PROPS START VALUE TESTS', () => {
    test('propsStartValue is NaN', () => {
      presentValueOfASingleFlowResult(
        NaN,
        3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsStartValue is negative number', () => {
      presentValueOfASingleFlowResult(
        -1,
        3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS DURATION TESTS', () => {
    test('propsDuration is NaN', () => {
      presentValueOfASingleFlowResult(
        1000,
        NaN,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsDuration is negative number', () => {
      presentValueOfASingleFlowResult(
        1000,
        -3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('INTEREST RATE DURATION TESTS', () => {
    test('interestRate is NaN', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        NaN,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('interestRate is negative number', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        -10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS OPTION DURATION TESTS', () => {
    test('propsOptionDuration is empty string', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        10,
        '',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('propsOptionDuration is random string', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        10,
        'faddfdafadfdsafdsaafds',
        'QuarterlyCapitalization',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS INTEREST CAPITALIZATION TESTS', () => {
    test('propsInterestCapitalization is empty string', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        10,
        'DurationInYears',
        '',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsInterestCapitalization is random string', () => {
      presentValueOfASingleFlowResult(
        1000,
        3,
        10,
        'DurationInYears',
        'fdfdsfsdfsdfsdfsdfsdfdf',
        setResultpresentValueOfASingleFlowResult
      )

      expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
        presentValue: 0,
        expectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('presentValueOfASingleFlowResult should return result when', () => {
  describe('PROPS OPTION DURATION AND INTEREST CAPITALIZATION TESTS', () => {
    describe('when propsOptionDuration equal DurationInMonths', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'AnnualCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 775.567329418758,
          expectedFinalValue: 1000,
          accruedInterest: 224.43267058124195,
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'SemiAnnualCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 770.8864373774865,
          expectedFinalValue: 1000,
          accruedInterest: 229.11356262251354,
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'QuarterlyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 768.4437850306748,
          expectedFinalValue: 1000,
          accruedInterest: 231.5562149693252,
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'MonthlyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 766.7751390143698,
          expectedFinalValue: 1000,
          accruedInterest: 233.22486098563024,
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'DailyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 765.9563128836531,
          expectedFinalValue: 1000,
          accruedInterest: 234.04368711634686,
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'ContinuousCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 765.9283383646487,
          expectedFinalValue: 1000,
          accruedInterest: 234.07166163535135,
        })
      })
    })
    describe('when propsOptionDuration equal DurationInYears', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'AnnualCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 751.3148009015775,
          expectedFinalValue: 1000,
          accruedInterest: 248.68519909842246,
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'SemiAnnualCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 746.2153966366274,
          expectedFinalValue: 1000,
          accruedInterest: 253.78460336337264,
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'QuarterlyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 743.5558850453086,
          expectedFinalValue: 1000,
          accruedInterest: 256.4441149546914,
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'MonthlyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 741.7397034556255,
          expectedFinalValue: 1000,
          accruedInterest: 258.26029654437446,
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'DailyCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 740.8486603320348,
          expectedFinalValue: 1000,
          accruedInterest: 259.1513396679652,
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        presentValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'ContinuousCapitalization',
          setResultpresentValueOfASingleFlowResult
        )

        expect(setResultpresentValueOfASingleFlowResult).toHaveBeenCalledWith({
          presentValue: 740.8182206817179,
          expectedFinalValue: 1000,
          accruedInterest: 259.1817793182821,
        })
      })
    })
  })
})
