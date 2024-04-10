import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { useTypedSelector } from '@/hooks'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const keywords: [string, string][] = [
  ['华语', ''],
  ['流行', ''],
  ['摇滚', ''],
  ['民谣', ''],
  ['电子', ''],
]

const Hot: FC<IProps> = () => {
  const { hotRecommends } = useTypedSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends,
  }))

  return (
    <HotWrapper>
      <SectionHeader
        title="热门推荐"
        morePath="/discover/playlist"
        keywords={keywords}
      />
      <div className="content">
        {hotRecommends.map((item) => (
          <SongMenuItem item={item} />
        ))}
      </div>
    </HotWrapper>
  )
}

export default memo(Hot)
