import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import Banner from './comps/banner'
import { useTypeDispatch } from '@/hooks'
import {
  fetchRankingDataAction,
  fetchRecommendDataAction,
  fetchSettleSinger,
} from '@/store/modules/recommend'
import { RecommendContent } from './style'
import Hot from './comps/hot'
import NewAlbum from './comps/new-album'
import Ranking from './comps/ranking'
import { RankingWrapper } from './comps/ranking/style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useTypeDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
    dispatch(fetchSettleSinger())
  }, [])
  return (
    <div>
      <Banner />
      <RecommendContent className="wrap-v2">
        <div className="left">
          <Hot />
          <NewAlbum />
          <Ranking />
          <RankingWrapper />
        </div>
        <div className="right">right</div>
      </RecommendContent>
    </div>
  )
}

export default memo(Recommend)
