import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SectionWrapper } from './style'
import { IHotRecommend } from '@/store/modules/recommend/types'
import { formatCount, getSizedImage } from '@/utils'

interface IProps {
  children?: ReactNode
  item: IHotRecommend
}

const SongMenuItem: FC<IProps> = (props) => {
  const { item } = props
  return (
    <SectionWrapper>
      <div className="top">
        <img src={getSizedImage(item.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info-bar sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(item.playCount)}</span>
            </span>
            <i></i>
          </div>
        </div>
      </div>
      <div className="bottom text-nowrap">{item.name}</div>
    </SectionWrapper>
  )
}

export default memo(SongMenuItem)
