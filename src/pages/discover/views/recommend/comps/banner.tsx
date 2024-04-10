import React, { memo, useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { queryBannerData } from '@/service/discover/recommend'
import { IBanner } from '@/service/discover/recommend/types'
import type { ReactNode, FC, ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [banners, setBanners] = useState<IBanner[]>([])
  const [current, setCurrent] = useState<number>(0)
  useEffect(() => {
    queryBannerData().then((banners) => {
      setBanners(banners)
    })
  }, [])

  function beforeChange(_: number, next: number) {
    setCurrent(next)
  }

  let bgImageUrl
  if (current >= 0 && banners.length > 0) {
    bgImageUrl = banners[current].imageUrl + '?imageView&blur=40x20'
  }

  console.log('bgImageUrl', bgImageUrl)
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
