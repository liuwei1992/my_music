import { RootState } from '@/store/hooks'
import { playSongList } from './data'

export interface ILyric {
  time: number
  text: string
}

export interface IPlayerState {
  // currentSongId: number
  lyric: ILyric[]
  playSongList: (typeof playSongList)[0][]
  playSongIndex: number
}

export interface IThunkState {
  state: RootState
}
