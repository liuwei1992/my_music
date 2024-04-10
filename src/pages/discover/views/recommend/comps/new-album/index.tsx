import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  return <div>NewAlbum</div>
}

export default memo(NewAlbum)
