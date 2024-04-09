import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Attention: FC<IProps> = () => {
  return <div>Attention</div>
}

export default memo(Attention)
