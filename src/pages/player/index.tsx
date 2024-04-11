import React, { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { BarControl, Operator, PlayerInfo, PlayerWrapper } from './style'
import { Slider } from 'antd'
import { useCurrentPlaySong } from '@/store/modules/player/hooks'
import { getSizedImage, getSongPlayUrl } from '@/utils'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  const [currentSong, setCurrentSong] = useCurrentPlaySong()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const mp3 = getSongPlayUrl(currentSong.id)
    console.log(mp3)
    audioRef.current!.src = mp3
  }, [currentSong, audioRef])

  // setCurrentSong(386538)

  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  function handleTimeUpdate() {}
  function handleTimeEnded() {}

  return (
    <PlayerWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn pre"
            onClick={() => setCurrentSong({ pre: true })}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={() => setCurrentSong({ next: true })}
          ></button>
        </BarControl>
        <PlayerInfo>
          <img
            className="image"
            src={getSizedImage(currentSong?.al?.picUrl, 50)}
          />
          <div className="info">
            <div className="song">
              <span className="title">{currentSong?.name}</span>
              <i />
              <span className="singer">{currentSong?.ar?.[0]?.name}</span>
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
      <audio
        ref={audioRef}
        src={''}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerWrapper>
  )
}

export default memo(Player)
