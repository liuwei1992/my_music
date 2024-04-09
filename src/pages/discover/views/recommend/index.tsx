import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import Banner from './comps/banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      <Banner />
    </div>
  )
}

export default memo(Recommend)
