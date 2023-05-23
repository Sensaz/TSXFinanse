import { useSelector } from 'react-redux'
import loanAmortizationResult from './FunctionForTest/loanAmortizationResult'
import { useEffect } from 'react'
import { Action, Dispatch } from '@reduxjs/toolkit'

import { resultPropertyForLoanAmortizationSimulationResult } from '../../../assets/data'

import Result from '../../Global/Result'

interface ResultState {
  loanAmount: number
  amountYouWillReceive: number
  commissionWillBe: number
  nominalInterestValue: number
  repaymentNominal: number
  annualPercentageRate: number
  initialResult: ResultState
}

interface LoanAmortizationSimulationResultType {
  loanValue: number
  commisionFee: number
  interestForBasePeriod: number
  totalPaymentPeriods: number
  doesTheBankChargeACommission: string
  interestAccrualMethod: string
  dispatch: Dispatch<Action>
}

const LoanAmortizationSimulationResult = ({
  loanValue,
  commisionFee,
  interestForBasePeriod,
  totalPaymentPeriods,
  doesTheBankChargeACommission,
  interestAccrualMethod,
  dispatch,
}: LoanAmortizationSimulationResultType) => {
  const { initialDebtBalanceArr } = useSelector(
    (state: any) => state.arraySlice
  )

  useEffect(() => {
    loanAmortizationResult(
      loanValue,
      commisionFee,
      interestForBasePeriod,
      totalPaymentPeriods,
      doesTheBankChargeACommission,
      interestAccrualMethod,
      initialDebtBalanceArr,
      dispatch
    )
  }, [initialDebtBalanceArr])

  const {
    loanAmount,
    amountYouWillReceive,
    commissionWillBe,
    nominalInterestValue,
    repaymentNominal,
    annualPercentageRate,
  } = useSelector((state: ResultState) => state.initialResult)

  const results = {
    loanAmount,
    amountYouWillReceive,
    commissionWillBe,
    nominalInterestValue,
    repaymentNominal,
    annualPercentageRate,
  }

  return (
    <Result
      property={resultPropertyForLoanAmortizationSimulationResult}
      results={results}
    />
  )
}

export default LoanAmortizationSimulationResult
