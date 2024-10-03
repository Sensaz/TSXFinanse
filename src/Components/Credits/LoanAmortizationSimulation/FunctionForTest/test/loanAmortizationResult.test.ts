import { Dispatch } from '@reduxjs/toolkit'
import loanAmortizationResult from '../loanAmortizationResult.ts'
import {
  // updateResult,
  resetResult,
} from '../../loanSimulationAmortizationResultState.ts'

const dispatch: Dispatch = jest.fn()

// loanValue: number
// commisionFee: number
// interestForBasePeriod: number
// totalPaymentPeriods: number
// doesTheBankChargeACommission: string
// interestAccrualMethod: string
// initialDebtBalanceArr: number
// dispatch: Dispatch

beforeEach(() => {
  jest.clearAllMocks()
})

// TODO: tu mam taki problem że loanValue w teorii może być 0, NaN lub ujemny ale wtedy zawsze initialDebtBalanceArr powinna mieć długość zero z podkreśleniem na powinna, pytanie czy moge to jakoś dynamicznie zaimportować taką logike czy może musze sie opierać na testach innych funckji albo zmienić zabezpieczenie przed takim incydentem w samej funkcji loanAmortizationResult? (problem dotyczy oczywiście wszyskich innych wartości) Masz może jakieś dobre kursy o testowaniu do polecenia?

describe('loanAmortizationResult return 0 and call resetResult when', () => {
  describe('loanValue tests', () => {
    test('loanValue equal 0', () => {
      const result = loanAmortizationResult(
        0,
        150,
        0.05,
        12,
        'Yes',
        'InterestPaidInAdvance',
        [0],
        dispatch
      )

      expect(result).toBe(0)

      expect(dispatch).toHaveBeenCalledTimes(6)
      expect(dispatch).toHaveBeenCalledWith(resetResult('loanAmount'))
      expect(dispatch).toHaveBeenCalledWith(resetResult('amountYouWillReceive'))
      expect(dispatch).toHaveBeenCalledWith(resetResult('commissionWillBe'))
      expect(dispatch).toHaveBeenCalledWith(resetResult('nominalInterestValue'))
      expect(dispatch).toHaveBeenCalledWith(resetResult('repaymentNominal'))
      expect(dispatch).toHaveBeenCalledWith(resetResult('annualPercentageRate'))
    })
  })
})
