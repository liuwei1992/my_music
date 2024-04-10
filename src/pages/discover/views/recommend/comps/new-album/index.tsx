import React, { memo, useRef } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { Carousel } from 'antd'
import { useTypedSelector } from '@/hooks'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  /** redux中获取数据 */
  const { newAlbums } = useTypedSelector((state) => ({
    newAlbums: state.recommend.newAlbums,
  }))

  return (
    <AlbumWrapper>
      <SectionHeader title="新碟上架" morePath="/discover/album" />
      <div className="content">
        <div
          className="sprite_02 arrow left"
          onClick={carouselRef?.current?.prev}
        ></div>
        <div className="center">
          <Carousel ref={carouselRef}>
            {[0, 1].map((index) => (
              <div>
                <div className="album-list">
                  {newAlbums.slice(index * 5, (index + 1) * 5).map((item) => (
                    <NewAlbumItem item={item} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
          {/* {[0, 1].map((index) => (
              <div>
                <h1>{index}</h1>
                <div className="album-list">
                  {newAlbums.slice(index * 5, (index + 1) * 5).map((item) => (
                    <NewAlbumItem item={item} />
                  ))}
                </div>
              </div>
            ))} */}
        </div>
        <div
          className="sprite_02 arrow right"
          onClick={carouselRef?.current?.next}
        ></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
