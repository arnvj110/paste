import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './feature/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})