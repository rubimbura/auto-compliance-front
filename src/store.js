import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import regulation from './slices/Regulation'
import appApi from './api'

export const store = configureStore({
  reducer: {
    regulation,
    [appApi.reducerPath]: appApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
})

setupListeners(store.dispatch)