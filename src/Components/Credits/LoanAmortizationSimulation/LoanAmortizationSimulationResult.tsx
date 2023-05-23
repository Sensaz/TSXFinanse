import { useSelector } from 'react-redux'
import loanAmortizationResult from './FunctionForTest/loanAmortizationResult'
import { useEffect } from 'react'
import { Action, Dispatch } from '@reduxjs/toolkit'

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

  const navigationForSmallDeviceState = useSelector(
    (state: any) => state.navigationForSmallDevice.flag
  )
  const modalStoreState = useSelector((state: any) => state.modalStore.flag)

  const checkTabIndex =
    navigationForSmallDeviceState || modalStoreState ? -1 : 1

  const {
    loanAmount,
    amountYouWillReceive,
    commissionWillBe,
    nominalInterestValue,
    repaymentNominal,
    annualPercentageRate,
  } = useSelector((state: ResultState) => state.initialResult)

  const jsxLoanAmount = loanAmount <= 0 ? 0 : loanAmount

  const jsxAmountYouWillReceive =
    amountYouWillReceive <= 0 ? 0 : amountYouWillReceive

  const jsxCommissionWillBe = commissionWillBe <= 0 ? 0 : commissionWillBe

  const jsxNominalInterestValue =
    nominalInterestValue <= 0 ? 0 : nominalInterestValue

  const jsxRepaymentNominal = repaymentNominal <= 0 ? 0 : repaymentNominal

  const jsxAnnualPercentageRate =
    annualPercentageRate <= 0 ? 0 : annualPercentageRate
  return (
    <>
      <div className="result">
        <h2 tabIndex={checkTabIndex} className="result__item">
          Wysokość kredytu: {jsxLoanAmount.toFixed(2)}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Kwota którą otrzymasz: {jsxAmountYouWillReceive.toFixed(2)}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Prowizja wyniesie: {jsxCommissionWillBe.toFixed(2)}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Nominalna wartość odsetek: {jsxNominalInterestValue.toFixed(2)}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          Nominalnie oddasz bankowi: {jsxRepaymentNominal.toFixed(2)}
        </h2>
        <h2 tabIndex={checkTabIndex} className="result__item">
          RRSO wyniesie: {jsxAnnualPercentageRate.toFixed(2)} %
        </h2>
      </div>
    </>
  )
}

export default LoanAmortizationSimulationResult
