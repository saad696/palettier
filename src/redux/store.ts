import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './slices/globalSlice'
import outfitSlice from './slices/outfitSlice'

export const store = configureStore({
  reducer: {
    global: globalSlice,
    outfit: outfitSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch