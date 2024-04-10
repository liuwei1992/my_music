import styled from 'styled-components'
import wrapBg from '@/assets/img/wrap-bg.png'

export const RecommendContent = styled.div`
  border: 1px solid #d3d3d3;
  background-image: url(${wrapBg});
  display: flex;

  > .left {
    padding: 20px;
    width: 729px;
    box-sizing: border-box;
  }

  > .right {
    flex: 1;
  }
`
