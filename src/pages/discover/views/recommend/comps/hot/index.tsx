import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotWrapper } from './style'
import SectionHeader from '@/components/section-header'

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
  return (
    <HotWrapper>
      <SectionHeader
        title="热门推荐"
        morePath="/discover/playlist"
        keywords={keywords}
      />
    </HotWrapper>
  )
}

export default memo(Hot)
