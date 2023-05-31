import { Action, Dispatch } from '@reduxjs/toolkit'
import {
  updateArray,
  resetArray,
} from '../loanSimulationAmortizationTableState.ts'

const pushResultToRedux = (
  dispatch: Dispatch<Action>,
  initialDebtBalanceArray: number[],
  interestArray: number[],
  principalPaymentArray: number[],
  loanPaymentArray: number[],
  finalDebtBalanceArray: number[]
) => {
  dispatch(resetArray('interestArr'))
  dispatch(resetArray('initialDebtBalanceArr'))
  dispatch(resetArray('principalPaymentArr'))
  dispatch(resetArray('loanPaymentArr'))
  dispatch(resetArray('finalDebtBalanceArr'))

  dispatch(
    updateArray({
      arrayType: 'initialDebtBalanceArr',
      value: initialDebtBalanceArray,
    })
  )
  dispatch(updateArray({ arrayType: 'interestArr', value: interestArray }))
  dispatch(
    updateArray({
      arrayType: 'principalPaymentArr',
      value: principalPaymentArray,
    })
  )
  dispatch(
    updateArray({ arrayType: 'loanPaymentArr', value: loanPaymentArray })
  )
  dispatch(
    updateArray({
      arrayType: 'finalDebtBalanceArr',
      value: finalDebtBalanceArray,
    })
  )
}

export default pushResultToRedux
