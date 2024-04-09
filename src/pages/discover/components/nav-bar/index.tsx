import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return <div>NavBar</div>
}

export default memo(NavBar)
