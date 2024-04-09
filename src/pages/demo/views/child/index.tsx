import { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const DemoChild: FC<IProps> = () => {
  return <div>DemoChild1</div>
}

export default memo(DemoChild)
