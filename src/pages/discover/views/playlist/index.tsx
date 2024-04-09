import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  return <div>PlayList</div>
}

export default memo(PlayList)
