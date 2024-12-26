import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    plus: (state) => state + 1,
    minus: (state) => state - 1,
  },
})

export const { plus, minus } = counterSlice.actions
export default counterSlice.reducer
