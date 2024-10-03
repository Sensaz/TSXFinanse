import { configureStore, createSlice } from '@reduxjs/toolkit'

import arraySlice from '../Credits/LoanAmortizationSimulation/loanSimulationAmortizationTableState.ts'

import initialResult from '../Credits/LoanAmortizationSimulation/loanSimulationAmortizationResultState.ts'

interface FlagStateType {
  flag: boolean
}

const navigationForSmallDevice = createSlice({
  name: 'navigationForSmallDevice',
  initialState: { flag: false } as FlagStateType,
  reducers: {
    setFalseFlag(state) {
      state.flag = false
    },
    setTrueFlag(state) {
      state.flag = true
    },
    toggledFlag(state) {
      state.flag = !state.flag
    },
  },
})

const phoneButton = createSlice({
  name: 'phoneButton',
  initialState: { flag: false } as FlagStateType,
  reducers: {
    setFalseFlag(state) {
      state.flag = false
    },
    setTrueFlag(state) {
      state.flag = true
    },
    toggledFlag(state) {
      state.flag = !state.flag
    },
  },
})

const modalStore = createSlice({
  name: 'modalStore',
  initialState: { flag: false } as FlagStateType,
  reducers: {
    setFalseFlag(state) {
      state.flag = false
    },
    setTrueFlag(state) {
      state.flag = true
    },
    toggledFlag(state) {
      state.flag = !state.flag
    },
  },
})

export const navigationForSmallDeviceValue = navigationForSmallDevice.actions
export const phoneButtonValue = phoneButton.actions
export const modalStoreValue = modalStore.actions

const store = configureStore({
  reducer: {
    navigationForSmallDevice: navigationForSmallDevice.reducer,
    phoneButton: phoneButton.reducer,
    modalStore: modalStore.reducer,
    arraySlice,
    initialResult,
  },
})

export default store
