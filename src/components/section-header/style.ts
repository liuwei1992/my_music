import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  color: #666;
  font-size: 12px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    flex: 1;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        a:hover {
          text-decoration: underline;
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    > i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
