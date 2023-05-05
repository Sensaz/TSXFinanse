import presentValueCalculate from '../FunctionForTest/presentValueCalculate'
const setResultPresentValueCalculate = jest.fn()

describe('presentValueCalculate should return three zeros when', () => {
  describe('PROPS START VALUE TESTS', () => {
    test('propsStartValue equal 0', () => {
      presentValueCalculate(
        '0',
        '3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsStartValue is negative number', () => {
      presentValueCalculate(
        '-1',
        '3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS DURATION TESTS', () => {
    test('propsDuration is equal 0', () => {
      presentValueCalculate(
        '1000',
        '0',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsDuration is negative number', () => {
      presentValueCalculate(
        '1000',
        '-3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('INTEREST RATE DURATION TESTS', () => {
    test('interestRate is equal 0', () => {
      presentValueCalculate(
        '1000',
        '3',
        '0',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('interestRate is negative number', () => {
      presentValueCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS OPTION DURATION TESTS', () => {
    test('propsOptionDuration is empty string', () => {
      presentValueCalculate(
        '1000',
        '3',
        '-10',
        '',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
    test('propsOptionDuration is random string', () => {
      presentValueCalculate(
        '1000',
        '3',
        '-10',
        'faddfdafadfdsafdsaafds',
        'QuarterlyCapitalization',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS INTEREST CAPITALIZATION TESTS', () => {
    test('propsInterestCapitalization is empty string', () => {
      presentValueCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        '',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })

    test('propsInterestCapitalization is random string', () => {
      presentValueCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        'fdfdsfsdfsdfsdfsdfsdfdf',
        setResultPresentValueCalculate
      )

      expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
        presentValue: 0,
        parsedExpectedFinalValue: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('presentValueCalculate should return result when', () => {
  describe('PROPS OPTION DURATION AND INTEREST CAPITALIZATION TESTS', () => {
    describe('when propsOptionDuration equal DurationInMonths', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'AnnualCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '775.57',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '224.43',
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'SemiAnnualCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '770.89',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '229.11',
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'QuarterlyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '768.44',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '231.56',
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'MonthlyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '766.78',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '233.22',
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'DailyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '765.96',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '234.04',
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'ContinuousCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '765.93',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '234.07',
        })
      })
    })
    describe('when propsOptionDuration equal DurationInYears', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'AnnualCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '751.31',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '248.69',
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'SemiAnnualCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '746.22',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '253.78',
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'QuarterlyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '743.56',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '256.44',
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'MonthlyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '741.74',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '258.26',
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'DailyCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '740.85',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '259.15',
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        presentValueCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'ContinuousCapitalization',
          setResultPresentValueCalculate
        )

        expect(setResultPresentValueCalculate).toHaveBeenCalledWith({
          presentValue: '740.82',
          parsedExpectedFinalValue: '1000.00',
          accruedInterest: '259.18',
        })
      })
    })
  })
})
