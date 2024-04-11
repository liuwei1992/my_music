import { configureStore } from '@reduxjs/toolkit'
import counter from './modules/counter'
import recommend from './modules/recommend'
import player from './modules/player'

const store = configureStore({
  reducer: {
    counter,
    recommend,
    player,
  },
})

export default store
