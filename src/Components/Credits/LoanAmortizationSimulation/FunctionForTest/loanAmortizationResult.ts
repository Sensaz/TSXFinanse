import { Action, Dispatch } from '@reduxjs/toolkit'
import nominalCommisionFee from './nominalCommisionFee'
import {
  updateResult,
  resetResult,
} from '../loanSimulationAmortizationResultState.ts'

const loanAmortizationResult = (
  loanValue: number,
  commisionFee: number,
  interestForBasePeriod: number,
  totalPaymentPeriods: number,
  doesTheBankChargeACommission: string,
  interestAccrualMethod: string,
  initialDebtBalanceArr: number[],
  dispatch: Dispatch<Action>
) => {
  if (!initialDebtBalanceArr.length) {
    dispatch(resetResult('loanAmount'))
    dispatch(resetResult('amountYouWillReceive'))
    dispatch(resetResult('commissionWillBe'))
    dispatch(resetResult('nominalInterestValue'))
    dispatch(resetResult('repaymentNominal'))
    dispatch(resetResult('annualPercentageRate'))

    return 0
  }
  const valueOfFee = nominalCommisionFee(
    loanValue,
    commisionFee,
    doesTheBankChargeACommission
  )

  console.log(initialDebtBalanceArr)

  let totalInterestInInterestPaidInAdvance = 0
  let totalInterest = 0

  initialDebtBalanceArr.forEach((el: number) => {
    if (interestAccrualMethod === 'InterestPaidInAdvance')
      totalInterestInInterestPaidInAdvance += el * (interestForBasePeriod / 100)
    totalInterest += el * interestForBasePeriod
  })
  // let previousTableContent: any = []
  // console.log(previousTableContent)
  // previousTableContent = initialDebtBalanceArr

  // Wysokość kredytu
  dispatch(updateResult({ resultType: 'loanAmount', value: loanValue }))

  // Kwota którą otrzymasz
  dispatch(
    updateResult({
      resultType: 'amountYouWillReceive',
      value: loanValue - valueOfFee - totalInterestInInterestPaidInAdvance,
    })
  )

  // Prowizja wyniesie
  dispatch(
    updateResult({
      resultType: 'commissionWillBe',
      value: valueOfFee + totalInterestInInterestPaidInAdvance,
    })
  )

  // Nominalna wartość odsetek
  dispatch(
    updateResult({
      resultType: 'nominalInterestValue',
      value: totalInterest,
    })
  )

  // Nominalnie łącznie oddasz bankowi
  dispatch(
    updateResult({
      resultType: 'repaymentNominal',
      value: loanValue + totalInterest + valueOfFee,
    })
  )

  // RRSO wyniesie
  dispatch(
    updateResult({
      resultType: 'annualPercentageRate',
      value:
        (Math.pow(1 + interestForBasePeriod, totalPaymentPeriods) - 1) * 100,
    })
  )

  return 1
}

export default loanAmortizationResult
