import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { BarControl, Operator, PlayerInfo, PlayerWrapper } from './style'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <PlayerWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={false}>
          <button className="sprite_playbar btn pre"></button>
          <button className="sprite_playbar btn play"></button>
          <button className="sprite_playbar btn next"></button>
        </BarControl>
        <PlayerInfo>
          <img
            className="image"
            src={
              'http://p1.music.126.net/_W32COgI9Y3aCOw2TZNREw==/125344325584417.jpg?param=34y34'
            }
          />
          <div className="info">
            <div className="song">
              <span className="title">相约一九九八</span>
              <i />
              <span className="singer">那英/王菲</span>
              <i />
            </div>

            <div className="progress">
              {/* Slider组件 */}
              <Slider step={0.5} value={50} tooltip={{ formatter: null }} />
              <div className="time">
                <span className="current">00:00</span>
                <span className="divider">/</span>
                <span>00:00</span>
              </div>
            </div>
          </div>
        </PlayerInfo>
        <Operator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </Operator>
      </div>
    </PlayerWrapper>
  )
}

export default memo(Player)
