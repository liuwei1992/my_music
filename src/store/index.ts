import { configureStore } from '@reduxjs/toolkit'
import counter from './modules/counter'
import recommend from './modules/recommend'

const store = configureStore({
  reducer: {
    counter,
    recommend,
  },
})

export default store
