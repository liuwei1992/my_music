import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import type { ReactNode, FC, ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useTypedSelector } from '@/store/hooks'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [current, setCurrent] = useState<number>(0)

  const { banners } = useTypedSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  )

  function beforeChange(_: number, next: number) {
    setCurrent(next)
  }

  let bgImageUrl
  if (current >= 0 && banners.length > 0) {
    bgImageUrl = banners[current].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
      }}
    >
      <div className="content wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect={'fade'}
            ref={bannerRef}
            beforeChange={beforeChange}
            dots={{ className: 'dotsClass' }}
          >
            {banners.map((banner) => (
              <div key={banner.imageUrl}>
                <img src={banner.imageUrl} />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
