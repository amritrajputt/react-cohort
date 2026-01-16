import { configureStore } from '@reduxjs/toolkit'
import { toggle } from './feature/slice'
import toggleReducer from "./feature/slice"
export const store = configureStore({
  reducer: {
    toggle:toggleReducer
  },
})