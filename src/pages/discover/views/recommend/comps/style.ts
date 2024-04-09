import styled from 'styled-components'
import downloadpng from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  height: 270px;
  background-color: red;

  .content {
    display: flex;
  }
`

export const BannerLeft = styled.div`
  background-color: red;
  height: 270px;
  width: 730px;

  img {
    height: 100%;
    width: 100%;
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${downloadpng});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: 420px;
    background-position: 0 -360px;
  }

  .right {
    right: 420px;
    background-position: 0 -508px;
  }
`
