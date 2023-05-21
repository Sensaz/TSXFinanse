import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ArrayState {
  initialDebtBalanceArr: number[]
  interestArr: number[]
  principalPaymentArr: number[]
  loanPaymentArr: number[]
  finalDebtBalanceArr: number[]
}

const initialArraysState: ArrayState = {
  initialDebtBalanceArr: [],
  interestArr: [],
  principalPaymentArr: [],
  loanPaymentArr: [],
  finalDebtBalanceArr: [],
}

const arraySlice = createSlice({
  name: 'arraySlice',
  initialState: initialArraysState,
  reducers: {
    updateArray: (
      state,
      action: PayloadAction<{ arrayType: keyof ArrayState; value: number }>
    ) => {
      const { arrayType, value } = action.payload
      state[arrayType].push(value)
    },
    resetArray: (state, action: PayloadAction<keyof ArrayState>) => {
      const arrayType = action.payload
      state[arrayType] = []
    },
  },
})

export const { updateArray, resetArray } = arraySlice.actions
export default arraySlice.reducer
