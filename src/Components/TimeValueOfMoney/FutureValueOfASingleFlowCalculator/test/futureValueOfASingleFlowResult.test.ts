import futureValueOfASingleFlowResult from '../futureValueOfASingleFlowResult'
const setResultfutureValueOfASingleFlowResult = jest.fn()

describe('futureValueOfASingleFlowResult should return three zeros when', () => {
  describe('PROPS START VALUE TESTS', () => {
    test('propsStartValue equal 0', () => {
      futureValueOfASingleFlowResult(
        NaN,
        3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsStartValue is negative number', () => {
      futureValueOfASingleFlowResult(
        -1,
        3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS DURATION TESTS', () => {
    test('propsDuration is equal 0', () => {
      futureValueOfASingleFlowResult(
        1000,
        NaN,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsDuration is negative number', () => {
      futureValueOfASingleFlowResult(
        1000,
        -3,
        10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('INTEREST RATE DURATION TESTS', () => {
    test('interestRate is equal 0', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        NaN,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })

    test('interestRate is negative number', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        -10,
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS OPTION DURATION TESTS', () => {
    test('propsOptionDuration is empty string', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        10,
        '',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
    test('propsOptionDuration is random string', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        10,
        'faddfdafadfdsafdsaafds',
        'QuarterlyCapitalization',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS INTEREST CAPITALIZATION TESTS', () => {
    test('propsInterestCapitalization is empty string', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        10,
        'DurationInYears',
        '',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsInterestCapitalization is random string', () => {
      futureValueOfASingleFlowResult(
        1000,
        3,
        10,
        'DurationInYears',
        'fdfdsfsdfsdfsdfsdfsdfdf',
        setResultfutureValueOfASingleFlowResult
      )

      expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
        investmentResult: 0,
        startValue: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('futureValueOfASingleFlowResult should return result when', () => {
  describe('PROPS OPTION DURATION AND INTEREST CAPITALIZATION TESTS', () => {
    describe('when propsOptionDuration equal DurationInMonths', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'AnnualCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1289.3787064875992,
          startValue: 1000,
          accruedInterest: 289.3787064875992,
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'SemiAnnualCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1297.2079303949688,
          startValue: 1000,
          accruedInterest: 297.2079303949688,
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'QuarterlyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1301.3313653907448,
          startValue: 1000,
          accruedInterest: 301.33136539074485,
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'MonthlyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1304.1633056666687,
          startValue: 1000,
          accruedInterest: 304.16330566666875,
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'DailyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1305.5574883053382,
          startValue: 1000,
          accruedInterest: 305.5574883053382,
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          32,
          10,
          'DurationInMonths',
          'ContinuousCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1305.605172064952,
          startValue: 1000,
          accruedInterest: 305.60517206495206,
        })
      })
    })
    describe('when propsOptionDuration equal DurationInYears', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'AnnualCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1331.0000000000005,
          startValue: 1000,
          accruedInterest: 331.00000000000045,
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'SemiAnnualCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1340.0956406250004,
          startValue: 1000,
          accruedInterest: 340.09564062500044,
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'QuarterlyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1344.8888242462972,
          startValue: 1000,
          accruedInterest: 344.8888242462972,
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'MonthlyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1348.1818424188275,
          startValue: 1000,
          accruedInterest: 348.1818424188275,
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'DailyCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1349.80334519579,
          startValue: 1000,
          accruedInterest: 349.8033451957899,
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        futureValueOfASingleFlowResult(
          1000,
          3,
          10,
          'DurationInYears',
          'ContinuousCapitalization',
          setResultfutureValueOfASingleFlowResult
        )

        expect(setResultfutureValueOfASingleFlowResult).toHaveBeenCalledWith({
          investmentResult: 1349.858807576003,
          startValue: 1000,
          accruedInterest: 349.8588075760031,
        })
      })
    })
  })
})
