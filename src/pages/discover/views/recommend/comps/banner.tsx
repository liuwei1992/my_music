import React, { memo, useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { queryBannerData } from '@/service/discover/recommend'
import { IBanner } from '@/service/discover/recommend/types'
import type { ReactNode, FC } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    queryBannerData().then((banners) => {
      setBanners(banners)
    })
  }, [])

  function handlePrevClick(){}
  function handleNextClick(){}

  return (
    <BannerWrapper>
      <div className="content wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            {banners.map((banner) => (
              <div key={banner.imageUrl}>
                <img src={banner.imageUrl} />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight>BannerRight</BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
