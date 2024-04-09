import styled from 'styled-components'
export const HeaderWrapper = styled.div`
  height: 75px;
  box-sizing: border-box;
  font-size: 14px;
  background: #242424;
  border-bottom: 1px solid #000;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
    line-height: 70px;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
  }

  .title-list {
    display: flex;

    .item {
      position: relative;

      a {
        display: block;
        color: #fff;
        padding: 0 20px;
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

  .login {
    cursor: pointer;

    &:hover {
      color: #ccc;
      text-decoration: underline;
    }
  }
`
