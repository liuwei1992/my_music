import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Wrapper } from './style'
import { INewAlbums } from '@/store/modules/recommend/types'
import { getSizedImage } from '@/utils'

interface IProps {
  children?: ReactNode
  item: INewAlbums
}

const NewAlbumItem: FC<IProps> = (pros) => {
  const { item } = pros
  return (
    <Wrapper>
      <div className="top">
        <img src={getSizedImage(item.picUrl, 100)} />
        <a href="#" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="title text-nowrap">{item.name}</div>
        <div className="detail text-nowrap">{item.artist.name}</div>
      </div>
    </Wrapper>
  )
}

export default memo(NewAlbumItem)
