import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingItemWrapper } from './style'
import { getSizedImage } from '@/utils'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
  item: any
}

const RankingItem: FC<IProps> = (props) => {
  const { item } = props

  const dispatch = useDispatch()
  function handlePlayClick(id: number) {
    // dispatch(fetchCurrentSongAction(id))
  }

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizedImage(item.coverImgUrl, 80)} alt="" />
          <a href="#" className="cover sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{item.name}</div>
          <div>
            <i className="sprite_02 btn play"></i>
            <i className="sprite_02 btn favor"></i>
          </div>
        </div>
      </div>
      <div className="list">
        {item.tracks.slice(0, 10).map((item: any, index: number) => (
          <div className="item" key={item.id}>
            <div className="index">{index + 1}</div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="operator">
                <button
                  className="btn sprite_02 play"
                  onClick={() => handlePlayClick(item.id)}
                ></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <a href="/discover/toplist">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)
