import styled from 'styled-components'
import progressBar from '@/assets/img/progress_bar.png'
import spriteIcon from '@/assets/img/sprite_icon.png'
import pipIcon from '@/assets/img/pip_icon.png'

export const PlayerWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: 0 0;
  background-repeat: repeat;
  height: 53px;
  color: white;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .center {
      flex: 1;
    }
  }
`

interface IBarControl {
  isPlaying: boolean
}
export const BarControl = styled.div<IBarControl>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .pre,
  .next {
    width: 28px;
    height: 28px;
  }

  .pre {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 7px;
    background-position: 0 ${(props) => (props.isPlaying ? '165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const PlayerInfo = styled.div`
  position: relative;
  top: 3px;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 30px;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    margin-left: 10px;
    color: #a1a1a1;

    .song {
      position: relative;
      left: 8px;
      top: 7px;
      .title {
        color: #e1e1e1;
      }

      .singer {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${progressBar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${progressBar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${spriteIcon}) 0 -250px;

          &::after {
            display: none;
          }
        }
      }
    }
  }
`

interface IBarOperator {
  playMode: number
}

export const Operator = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;

    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${pipIcon});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
