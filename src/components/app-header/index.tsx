import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { titels } from './data'
import { NavLink } from 'react-router-dom'
import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function getItem(title: (typeof titels)[0]) {
    return (
      <div className="item">
        {title.type == 'path' ? (
          <NavLink to={title.link}>
            {title.title}
            <i className="icon sprite_01"></i>
          </NavLink>
        ) : (
          <a href={title.link} target="_blank">
            {title.title}
          </a>
        )}
      </div>
    )
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/"></a>
          <div className="title-list">
            {titels.map((title) => getItem(title))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
