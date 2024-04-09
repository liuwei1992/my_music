import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import store from '@/store'

type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTypeDispatch: () => typeof store.dispatch = useDispatch
