import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IPlayerState, IThunkState } from './types'
import { getSongDetail, getSongLyric } from '@/service/player'
import { playSongList } from './data'
import { parseLyric } from '@/utils'

const initialState: IPlayerState = {
  // currentSongId: -1,
  lyric: [],
  playSongList: playSongList,
  playSongIndex: 0,
}

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    // changeCurrentSongIdAction(state, { payload }) {
    //   state.currentSongId = payload
    // },
    changeLyricAction(state, { payload }) {
      state.lyric = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
  },
})

export const changePlaySongListAction =
  playerSlice.actions.changePlaySongIndexAction

export default playerSlice.reducer

const setSongLyric = createAsyncThunk<void, number, IThunkState>(
  '',
  async (id, { dispatch }) => {
    const res = await getSongLyric(id)
    // 1.获取歌词的字符串
    const lyricString = res.lrc.lyric
    // 2.对歌词进行解析(一个个对象)
    const lyrics = parseLyric(lyricString)
    // 3.将歌词放到state中
    dispatch(playerSlice.actions.changeLyricAction(lyrics))
  }
)

export const setCurrentSongAction = createAsyncThunk<void, number, IThunkState>(
  'setCurrentSong',
  async (id: number, { dispatch, getState }) => {
    // 1、先从列表中获取
    const list = getState().player.playSongList
    let findIndex = list.findIndex((v) => v.id == id)

    if (findIndex === -1) {
      const res = await getSongDetail(id)
      // 1.获取song
      if (res.songs.length) {
        const song = res.songs[0]
        const newList = [...list, song]
        findIndex = newList.length
        dispatch(playerSlice.actions.changePlaySongListAction(newList))
      } else {
        findIndex = 0
        id = list[0].id
      }
    }

    dispatch(playerSlice.actions.changePlaySongIndexAction(findIndex))

    dispatch(setSongLyric(id))
  }
)
