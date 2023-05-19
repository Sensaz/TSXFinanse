import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArrayState {
  initialDebtBalanceArr: number[];
  interestArr: number[];
  loanPaymentArr: number[];
  principalPaymentArr: number[];
  finalDebtBalanceArr: number[];
}

const initialState: ArrayState = {
  initialDebtBalanceArr: [],
  interestArr: [],
  loanPaymentArr: [],
  principalPaymentArr: [],
  finalDebtBalanceArr: [],
};

const arraySlice = createSlice({
  name: 'arraySlice',
  initialState,
  reducers: {
    updateArray: (state, action: PayloadAction<{ arrayType: keyof ArrayState; value: number }>) => {
      const { arrayType, value } = action.payload;
      state[arrayType].push(value);
    },
    resetArray: (state, action: PayloadAction<keyof ArrayState>) => {
      const arrayType = action.payload;
      state[arrayType] = [];
    },
  },
});


export const { updateArray, resetArray } = arraySlice.actions;
export default arraySlice.reducer;
