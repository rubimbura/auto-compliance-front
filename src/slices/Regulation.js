import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: '',
}

export const regulationSlice = createSlice({
  name: 'regulation',
  initialState,
  reducers: {
    regulation: (state, {payload}) => {
      state.value = payload
    },
  },
})

export const { regulation } = regulationSlice.actions

export default regulationSlice.reducer