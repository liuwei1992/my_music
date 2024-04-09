import style from 'styled-components'

export const NavWrapper = style.div`
  background: #C20C0C;
  height: 35px;
  font-size: 12px;

  .content{
    display:flex;  
    padding-left: 345px;
  }

  .item{
    padding: 0 13px;
    margin: 7px 8px 0;

    a {
      display: inline-block;
      color: #fff;
      line-height: 20px;
      padding: 0 13px;
  
      &:hover, &.active {
        background: #9B0909;
        border-radius: 20px;
      }
    }
  }

 
`
