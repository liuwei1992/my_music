import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { useTypedSelector } from '@/hooks'
import { shallowEqual } from 'react-redux'
import RankingItem from './RankingItem'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const { rankings } = useTypedSelector(
    (state) => ({
      rankings: state.recommend.rankings,
    }),
    shallowEqual
  )
  return (
    <RankingWrapper>
      <SectionHeader title="榜单" morePath="/discover/toplist" />
      <div className="content">
        {rankings.map((v) => (
          <RankingItem key={v.id} item={v} />
        ))}
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
