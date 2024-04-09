import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return <div>AppHeader</div>
}

export default memo(AppHeader)
