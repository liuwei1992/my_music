import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderWrapper } from './style'
import { Link } from 'react-router-dom'

type IKeyword = [string, string]

interface IProps {
  children?: ReactNode
  title: string
  keywords?: [string, string][]
  morePath: string
}

const SectionHeader: FC<IProps> = (props) => {
  const { title, keywords, morePath } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        {keywords && (
          <div className="keywords">
            {keywords.map(([word, path]) => (
              <div className="item" key={word}>
                <Link to={path}>{word}</Link>
                <span className="divider">|</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="right">
        <Link to={morePath}>更多</Link>
        <i className="sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

export default memo(SectionHeader)
