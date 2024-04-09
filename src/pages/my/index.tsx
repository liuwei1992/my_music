import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const My: FC<IProps> = () => {
  return <div>My</div>
}

export default memo(My)
