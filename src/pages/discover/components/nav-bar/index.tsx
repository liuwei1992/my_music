import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { navList } from './data'
import { NavWrapper } from './style'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  function getNav(nav: (typeof navList)[0]) {
    return <NavLink to={nav.link}>{nav.title}</NavLink>
  }
  return (
    <NavWrapper>
      <div className="content wrap-v1">
        {navList.map((nav) => {
          return <div className='item'>{getNav(nav)}</div>
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
