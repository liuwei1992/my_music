import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { useParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const DemoChild2: FC<IProps> = () => {
  const params = useParams()
  return <div>Demo-Child-id{params.id}</div>
}

export default memo(DemoChild2)
