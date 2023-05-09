import { configureStore, createSlice } from '@reduxjs/toolkit'

interface NavigationTogglerState {
  flag: boolean
}

const navigationToggler = createSlice({
  name: 'navigationToggler',
  initialState: { flag: false } as NavigationTogglerState,
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

export const actions = navigationToggler.actions
const store = configureStore({
  reducer: navigationToggler.reducer,
})

export default store

// export type RootState = ReturnType<typeof navigationToggler.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof navigationToggler.dispatch
