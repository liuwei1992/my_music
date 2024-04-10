import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/hooks/store'
import { IRecommendState } from './types'
import {
  getArtistList,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getTopBanner,
} from '@/service/discover/recommend'

// type RankingType = Partial<Record<keyof typeof rankingMap, any>>

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: [],
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    },
  },
})

const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingerAction,
} = recommendSlice.actions

export const rankingMap = {
  upRanking: 19723756,
  newRanking: 3779629,
  originRanking: 2884035,
}

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    // 1.顶部的banners
    getTopBanner().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })

    // 2.热门推荐
    getHotRecommend(8).then((res: any) => {
      dispatch(changeHotRecommendAction(res.result))
    })

    // 3.新碟上架
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })

    return null
  }
)

export const fetchRankingDataAction = createAsyncThunk<
  void,
  void,
  { state: RootState }
>('ranking', (arg, { dispatch }) => {
  // 所有的榜单数据
  const promises: Promise<any>[] = []
  let key: keyof typeof rankingMap
  for (key in rankingMap) {
    const id = rankingMap[key]
    promises.push(getPlayListDetail(id))
  }

  Promise.all(promises).then((res) => {
    const rankings = res.map((item) => item.playlist)
    dispatch(changeRankingsAction(rankings))
  })
})

export const fetchSettleSinger = createAsyncThunk(
  'settlesinger',
  async (_, { dispatch }) => {
    const res = await getArtistList(5001, 5)
    // dispatch()
    dispatch(changeSettleSingerAction(res.artists))
  }
)

export default recommendSlice.reducer
