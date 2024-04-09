import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
}

const initialState: IState = {
  count: 10,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCountAction: (store, { payload }: PayloadAction<number>) => {
      store.count += payload
    },
  },
})

export const { addCountAction } = slice.actions

export default slice.reducer
