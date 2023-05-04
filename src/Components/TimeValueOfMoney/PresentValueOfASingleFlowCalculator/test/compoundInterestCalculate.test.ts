import compoundInterestCalculate from '../FunctionForTest/compoundInterestCalculate'
const setResultCompoundInterestCalculate = jest.fn()

describe('compoundInterestCalculate should return three zeros when', () => {
  describe('PROPS START VALUE TESTS', () => {
    test('propsStartValue equal 0', () => {
      compoundInterestCalculate(
        '0',
        '3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })

    test('propsStartValue is negative number', () => {
      compoundInterestCalculate(
        '-1',
        '3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS DURATION TESTS', () => {
    test('propsDuration is equal 0', () => {
      compoundInterestCalculate(
        '1000',
        '0',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })

    test('propsDuration is negative number', () => {
      compoundInterestCalculate(
        '1000',
        '-3',
        '10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('INTEREST RATE DURATION TESTS', () => {
    test('interestRate is equal 0', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '0',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })

    test('interestRate is negative number', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS OPTION DURATION TESTS', () => {
    test('propsOptionDuration is empty string', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '-10',
        '',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
    test('propsOptionDuration is random string', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '-10',
        'faddfdafadfdsafdsaafds',
        'QuarterlyCapitalization',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })

  describe('PROPS INTEREST CAPITALIZATION TESTS', () => {
    test('propsInterestCapitalization is empty string', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        '',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })

    test('propsInterestCapitalization is random string', () => {
      compoundInterestCalculate(
        '1000',
        '3',
        '-10',
        'DurationInYears',
        'fdfdsfsdfsdfsdfsdfsdfdf',
        setResultCompoundInterestCalculate
      )

      expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
        parsedStartValue: 0,
        investmentResult: 0,
        accruedInterest: 0,
      })
    })
  })
})

describe('compoundInterestCalculate should return result when', () => {
  test('propsStartValue, propsDuration, interestRate is positive number and propsOptionDuration with propsInterestCapitalization have key option', () => {
    compoundInterestCalculate(
      '1000',
      '3',
      '10',
      'DurationInYears',
      'QuarterlyCapitalization',
      setResultCompoundInterestCalculate
    )

    expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
      parsedStartValue: '1000.00',
      investmentResult: '1344.89',
      accruedInterest: '344.89',
    })
  })

  describe('PROPS OPTION DURATION AND INTEREST CAPITALIZATION TESTS', () => {
    describe('when propsOptionDuration equal DurationInMonths', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'AnnualCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1289.38',
          accruedInterest: '289.38',
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'SemiAnnualCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1297.21',
          accruedInterest: '297.21',
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'QuarterlyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1301.33',
          accruedInterest: '301.33',
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'MonthlyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1304.16',
          accruedInterest: '304.16',
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'DailyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1305.56',
          accruedInterest: '305.56',
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '32',
          '10',
          'DurationInMonths',
          'ContinuousCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1305.61',
          accruedInterest: '305.61',
        })
      })
    })
    describe('when propsOptionDuration equal DurationInYears', () => {
      test('result when propsInterestCapitalization equal AnnualCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'AnnualCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1331.00',
          accruedInterest: '331.00',
        })
      })
      test('result when propsInterestCapitalization equal SemiAnnualCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'SemiAnnualCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1340.10',
          accruedInterest: '340.10',
        })
      })
      test('result when propsInterestCapitalization equal QuarterlyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'QuarterlyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1344.89',
          accruedInterest: '344.89',
        })
      })
      test('result when propsInterestCapitalization equal MonthlyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'MonthlyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1348.18',
          accruedInterest: '348.18',
        })
      })
      test('result when propsInterestCapitalization equal DailyCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'DailyCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1349.80',
          accruedInterest: '349.80',
        })
      })
      test('result when propsInterestCapitalization equal ContinuousCapitalization ', () => {
        compoundInterestCalculate(
          '1000',
          '3',
          '10',
          'DurationInYears',
          'ContinuousCapitalization',
          setResultCompoundInterestCalculate
        )

        expect(setResultCompoundInterestCalculate).toHaveBeenCalledWith({
          parsedStartValue: '1000.00',
          investmentResult: '1349.86',
          accruedInterest: '349.86',
        })
      })
    })
  })
})
