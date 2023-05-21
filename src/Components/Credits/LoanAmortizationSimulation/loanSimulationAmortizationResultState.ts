import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ResultState {
  loanAmount: number
  amountYouWillReceive: number
  commissionWillBe: number
  nominalInterestValue: number
  repaymentNominal: number
  annualPercentageRate: number
}

const initialResultState: ResultState = {
  loanAmount: 0,
  amountYouWillReceive: 0,
  commissionWillBe: 0,
  nominalInterestValue: 0,
  repaymentNominal: 0,
  annualPercentageRate: 0,
}

const initialResult = createSlice({
  name: 'initialResult',
  initialState: initialResultState,
  reducers: {
    updateResult: (
      state,
      action: PayloadAction<{ resultType: keyof ResultState; value: number }>
    ) => {
      const { resultType, value } = action.payload
      state[resultType] = value
    },
    resetResult: (state, action: PayloadAction<keyof ResultState>) => {
      const resultType = action.payload
      state[resultType] = 0
    },
  },
})

export const { updateResult, resetResult } = initialResult.actions

export default initialResult.reducer
