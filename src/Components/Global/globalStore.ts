import { configureStore, createSlice } from '@reduxjs/toolkit'

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

export const navigationForSmallDeviceValue = navigationForSmallDevice.actions
export const phoneButtonValue = phoneButton.actions

const store = configureStore({
  reducer: {
    navigationForSmallDevice: navigationForSmallDevice.reducer,
    phoneButton: phoneButton.reducer,
  },
})

export default store

// export type RootState = ReturnType<typeof navigationToggler.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof navigationToggler.dispatch
